import { useContext } from "react";

import { TodoContext } from "../../context/todo-list.context";
import ListItem from "../list-item/list-item.component";

const TodoList = () => {
  const { todoList } = useContext(TodoContext);

  return (
    <div className="todo-list__container">
      <ul className="todo-list__items" role="list">
        {todoList.map((list, index) => {
          return <ListItem listItem={list} key={index} index={index} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
