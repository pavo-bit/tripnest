import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        destinations: resolve(__dirname, 'destinations.html'),
        trips: resolve(__dirname, 'trips.html'),
        reviews: resolve(__dirname, 'reviews.html'),
        policies: resolve(__dirname, 'policies.html'),
      },
    },
  },
});
