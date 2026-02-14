// Reusable question component

export class Question {
    constructor(config) {
        this.question = config.question;
        this.options = config.options;
        this.correctAnswer = config.correctAnswer;
        this.explanation = config.explanation;
        this.type = config.type || 'single'; // 'single' or 'multiple'
        this.containerId = config.containerId;
    }

    render() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const inputType = this.type === 'single' ? 'radio' : 'checkbox';
        const name = `question-${this.containerId}`;

        let html = `
            <div class="question-component">
                <p class="text-lg font-semibold text-neutral-900 mb-4">${this.question}</p>
                <div class="space-y-3">
        `;

        this.options.forEach((option, index) => {
            html += `
                <label class="flex items-start p-4 bg-white rounded-lg border-2 border-neutral-300 cursor-pointer hover:border-primary-300 transition-colors question-option">
                    <input type="${inputType}" name="${name}" value="${index}" class="mt-1 mr-3">
                    <span>${option}</span>
                </label>
            `;
        });

        html += `
                </div>
                <button class="btn btn-primary mt-4 check-answer-btn">Check Answer</button>
                <div class="feedback-container hidden mt-4"></div>
            </div>
        `;

        container.innerHTML = html;

        // Add event listener
        container.querySelector('.check-answer-btn').addEventListener('click', () => {
            this.checkAnswer();
        });
    }

    checkAnswer() {
        const container = document.getElementById(this.containerId);
        const inputs = container.querySelectorAll(`input:checked`);
        const selectedValues = Array.from(inputs).map(input => parseInt(input.value));

        const feedbackContainer = container.querySelector('.feedback-container');
        const options = container.querySelectorAll('.question-option');

        // Reset styles
        options.forEach(option => {
            option.classList.remove('answer-correct', 'answer-incorrect');
        });

        if (selectedValues.length === 0) {
            feedbackContainer.innerHTML = `
                <div class="p-4 bg-yellow-50 border-2 border-yellow-500 rounded-lg">
                    <p class="text-yellow-800">⚠️ Please select an answer!</p>
                </div>
            `;
            feedbackContainer.classList.remove('hidden');
            return;
        }

        const isCorrect = this.type === 'single'
            ? selectedValues[0] === this.correctAnswer
            : this.arraysEqual(selectedValues.sort(), this.correctAnswer.sort());

        if (isCorrect) {
            feedbackContainer.innerHTML = `
                <div class="p-4 bg-green-50 border-2 border-green-500 rounded-lg">
                    <p class="text-green-800 font-bold mb-2">✅ Correct!</p>
                    ${this.explanation ? `<p class="text-green-700 text-sm">${this.explanation}</p>` : ''}
                </div>
            `;
            
            // Highlight correct answers
            selectedValues.forEach(val => {
                options[val].classList.add('answer-correct');
            });
        } else {
            feedbackContainer.innerHTML = `
                <div class="p-4 bg-red-50 border-2 border-red-500 rounded-lg">
                    <p class="text-red-800 font-bold">❌ Not quite. Try again!</p>
                </div>
            `;
            
            // Highlight incorrect answers
            selectedValues.forEach(val => {
                options[val].classList.add('answer-incorrect');
            });
        }

        feedbackContainer.classList.remove('hidden');
        feedbackContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    arraysEqual(a, b) {
        return a.length === b.length && a.every((val, index) => val === b[index]);
    }
}