// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';  // Import the App component
import './index.css'; // Import the global CSS file

const rootElement = document.getElementById('root'); // Get the root div
const root = createRoot(rootElement); // Create the root for rendering

root.render(
  <StrictMode>
    <App /> {/* Render the App component inside StrictMode */}
  </StrictMode>
);
