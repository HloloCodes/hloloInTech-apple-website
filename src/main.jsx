import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './index.css'; // Import the CSS file with Tailwind's utilities


// Sentry Integration
import * as Sentry from "@sentry/react";
import { BrowserTracing } from '@sentry/react';

// Initialize Sentry with proper configurations
Sentry.init({
  dsn: "https://33eb2360fb1dc11dea67fd2ca02120e1@o4508119796023296.ingest.us.sentry.io/4508137706881026",
  integrations: [
    new BrowserTracing({
      tracingOrigins: ["localhost", "https://yourserver.io/api"], // Tracing origins to capture
    }),
    Sentry.replayIntegration({
      maskAllText: false,  // Don't mask any text by default
      blockAllMedia: false,  // Allow media to be captured in the replay
    }),
  ],

  // Tracing setup
  tracesSampleRate: 1.0,  // Capture 100% of the transactions
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  // Session Replay setup
  replaysSessionSampleRate: 1.0,  // 10% session replay sampling rate then i changed it to 100%
  replaysOnErrorSampleRate: 1.0,  // 100% session replay for errors
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
