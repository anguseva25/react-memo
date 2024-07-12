import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { GameSettingsProvider } from "./context/GameSettingsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GameSettingsProvider>
      <RouterProvider router={router}></RouterProvider>
    </GameSettingsProvider>
  </React.StrictMode>,
);
