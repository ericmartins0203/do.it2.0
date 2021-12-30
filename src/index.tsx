import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./contexts";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
