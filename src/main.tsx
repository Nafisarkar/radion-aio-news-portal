import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./Provider/theme-provider.tsx";

import { Provider } from "react-redux";
import store from "./store/store.ts";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
