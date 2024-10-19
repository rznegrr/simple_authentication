import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import customTheme from "./ui/customTheme.ts";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={customTheme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);
