import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/scss/style.scss";
import { TodoProvider } from "./context/todo-list.context";
import App from "./App";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
