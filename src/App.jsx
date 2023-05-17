import { useContext } from "react";

import Layout from "./components/layout/layout.component";
import AddTodo from "./components/todo-form/todo-form.component";
import TodoList from "./components/todo-list/todo-list.component";
import { TodoContext } from "./context/todo-list.context";
function App() {
  const { todoList } = useContext(TodoContext);

  return (
    <Layout>
      <h1 className="main__heading">React To-Do-List App</h1>
      <div className="wrapper">
        <AddTodo />
        {todoList.length === 0 ? "" : <TodoList />}
      </div>
      <div className="footer">
        <p>
          Created by{" "}
          <a
            href="https://github.com/frontendfixer"
            target="_blank"
            rel="noreferrer"
          >
            Lakshmikanta Patra
          </a>{" "}
          with <span className="love">&#10084;</span>
        </p>
      </div>
    </Layout>
  );
}

export default App;
