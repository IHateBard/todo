import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { config } from "./config/config";

async function deferRender() {
  if (process.env.NODE_ENV === "development" && config.mock?.api) {
    const { mocksWorker } = await import("./mocks/browser");
    return mocksWorker.start();
  }
  return;
}

deferRender().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
