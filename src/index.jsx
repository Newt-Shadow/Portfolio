import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import "./index.css";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";
import "./assets/font-awesome/css/all.css";


const theme = createTheme({
  
  palette: {
    mode: 'light',
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> {}
    <App />
  </ThemeProvider>
);

serviceWorker.unregister();
