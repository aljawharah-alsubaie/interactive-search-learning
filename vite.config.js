import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        puzzle: resolve(__dirname, 'modules/8-puzzle/index.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});