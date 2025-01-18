// main.jsx
import react, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // Import the App component
import "./index.css"; // Import the global CSS file
import { Provider } from 'react-redux';
import { store } from "./components/redux/store.jsx";
import { BrowserRouter  } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
