// vite.config.js
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from '@sentry/vite-plugin';

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: process.env.VITE_SENTRY_ORG,
      project: process.env.VITE_SENTRY_PROJECT,
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
    }),
  ],
  build: {
    sourcemap: true, // Ensure sourcemaps are included for debugging
    rollupOptions: {
      external: [
        'gsap', // Ensure gsap is treated as an external dependency 
        '/assets/videos/hero.mp4',
        '/assets/videos/smallHero.mp4',
        "/assets/videos/highlight-first.mp4",
        "/assets/videos/hightlight-third.mp4",
        "/assets/videos/hightlight-sec.mp4",
        "/assets/videos/hightlight-fourth.mp4",
        "/assets/videos/explore.mp4",
        "/assets/videos/frame.mp4",
        
        "/assets/images/apple.svg",
        "/assets/images/search.svg",
        "/assets/images/bag.svg",
        "/assets/images/watch.svg",
        "/assets/images/right.svg",
        "/assets/images/replay.svg",
        "/assets/images/play.svg",
        "/assets/images/pause.svg",
        
        "/assets/images/hero.jpeg"
        "/assets/images/yellow.jpg",
        "/assets/images/blue.jpg",
        "/assets/images/white.jpg",
        "/assets/images/black.jpg",
        "/assets/images/explore1.jpg",
        "/assets/images/explore2.jpg",
        "/assets/images/chip.jpeg",
        "/assets/images/frame.png",
       ], 
      input: {
        // Add entry point if necessary
        main: path.resolve(__dirname, 'index.html'),
        
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias for easier imports
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  server: {
    open: true, // Automatically open the browser
  },
  assetsInclude: ['**/*.mp4'], // Ensures .mp4 files are included in the assets
});
