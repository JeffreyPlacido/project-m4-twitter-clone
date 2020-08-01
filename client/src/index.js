import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CurrentUserProvider } from "./Components/CurrentUserContext";

ReactDOM.render(
  <CurrentUserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CurrentUserProvider>,
  document.getElementById("root")
);
