import { useContext, useState } from "react";
import { nanoid } from "nanoid";

import { ReactComponent as AddIcon } from "../../assets/images/add.svg";
import { TodoContext } from "../../context/todo-list.context";

const AddTodo = () => {
  const { todoList, setTodoList } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");

  const handelAddList = (e) => {
    e.preventDefault();
    if (!inputValue.length) return;

    const newListItem = {
      id: nanoid(),
      task: inputValue,
    };
    const newList = todoList.concat(newListItem);
    setInputValue("");

    return setTodoList(newList);
  };

  const handelChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="form" onSubmit={handelAddList}>
      <input
        className="form__input"
        type="text"
        id="add-todo"
        onChange={handelChange}
        value={inputValue}
        required
        placeholder="Add task ..."
      />
      <button className="form__button">
        <AddIcon className="icon" />
        <span>Add</span>
      </button>
    </form>
  );
};

export default AddTodo;
