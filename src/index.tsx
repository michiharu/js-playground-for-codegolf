import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import theme from "./theme";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);
