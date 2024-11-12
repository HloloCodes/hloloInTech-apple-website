import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx';

import './index.css'; // Import the CSS file with Tailwind's utilities

// Import GSAP
import { gsap } from "gsap";

//import gsap from "./node_modules/gsap/index.js";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
