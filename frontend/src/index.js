import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "./bootstrap.min.css";
import { theme } from "./config/theme";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
reportWebVitals();
