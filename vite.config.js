import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        puzzle: resolve(__dirname, '8-puzzle-module.html'),
        hanoi: resolve(__dirname, 'hanoi-module.html'),
        hospital: resolve(__dirname, 'hospital-module.html'),
        maze: resolve(__dirname, 'maze-module.html'),
        pizza: resolve(__dirname, 'pizza-delivery-module.html'),
        romania: resolve(__dirname, 'romania-map-module.html'),
        tsp: resolve(__dirname, 'tsp-module.html'),
        vacuum: resolve(__dirname, 'vacuum-world-module.html'),
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});