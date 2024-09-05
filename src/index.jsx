import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import "./index.css";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";
import "./assets/font-awesome/css/all.css";

// Create a MUI theme instance
const theme = createTheme({
  // You can customize the theme here
  palette: {
    mode: 'light', // or 'dark'
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Normalize CSS */}
    <App />
  </ThemeProvider>
);

serviceWorker.unregister();
