import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';  // Static import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: process.env.VITE_SENTRY_ORG,  // Use environment variables for sensitive info
      project: process.env.VITE_SENTRY_PROJECT,
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN, // Ensure authToken is provided
    }),
  ],

  build: {
    sourcemap: true,  // Enable sourcemaps for better error tracking
  },

  css: {
    postcss: {
      plugins: [
        tailwindcss(),  // Add tailwindcss as a PostCSS plugin
        require('autoprefixer'),  // Add autoprefixer as a PostCSS plugin
      ],
    },
  },
});
