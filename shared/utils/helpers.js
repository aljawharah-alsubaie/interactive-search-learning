// Utility functions for the application

export function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function isValidPuzzleState(state) {
    if (!Array.isArray(state) || state.length !== 9) return false;
    const sorted = [...state].sort();
    return sorted.every((val, idx) => val === idx);
}

export function calculateManhattanDistance(state, goal) {
    let distance = 0;
    for (let i = 0; i < state.length; i++) {
        if (state[i] === 0) continue;
        const goalIndex = goal.indexOf(state[i]);
        const currentRow = Math.floor(i / 3);
        const currentCol = i % 3;
        const goalRow = Math.floor(goalIndex / 3);
        const goalCol = goalIndex % 3;
        distance += Math.abs(currentRow - goalRow) + Math.abs(currentCol - goalCol);
    }
    return distance;
}

export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}