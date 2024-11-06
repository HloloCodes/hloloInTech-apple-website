import tailwindcss from 'tailwindcss';
import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
  },

  css: {
    postcss: {
      plugins: [
        // Add tailwindcss and autoprefixer as PostCSS plugins
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
});
