import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Static imports for tailwindcss and autoprefixer
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: process.env.VITE_SENTRY_ORG,  // Use environment variables for sensitive info
      project: process.env.VITE_SENTRY_PROJECT,
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
    }),
  ],

  build: {
    sourcemap: true,  // Enable sourcemaps for better error tracking

    // Add gsap to rollupOptions.external to avoid bundling it
    rollupOptions: {
      external: ['gsap'],
    },
  },

  css: {
    postcss: {
      plugins: [
        // Add tailwindcss and autoprefixer as PostCSS plugins
        tailwindcss,
        autoprefixer,
      ],
    },
  },
});
