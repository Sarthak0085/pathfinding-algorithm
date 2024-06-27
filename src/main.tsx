import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PathfindingProvider } from "./context/PathfindingContext.tsx";
import { TileProvider } from "./context/TileContext.tsx";
import { SpeedProvider } from "./context/SpeedContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <App />
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  </React.StrictMode>
);
