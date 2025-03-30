import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TaskProvider } from "./context/taskProvider.jsx";
import App from "./components/app.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </StrictMode>
);
