import { createContext } from "react";
import useLocalStorage from "use-local-storage";

export const TodoContext = createContext({
  todoList: [
    {
      id: "",
      task: "",
      isDone: false,
    },
  ],
  setTodoList: () => {},
});

const todoListToDelete = (listItems, listItemToDelete) =>
  listItems.filter((listItem) => listItem.id !== listItemToDelete.id);

const taskSetToComplete = (listItems, listItemToComplete) =>
  listItems.map((listItem) =>
    listItem.id === listItemToComplete.id
      ? { ...listItem, isDone: true }
      : listItem
  );
const taskSetToInitial = (listItems, listItemToInitial) => {
  const taskExist = listItems.find(
    (listItem) => listItem.id === listItemToInitial.id
  );
  console.log("1st");

  if (taskExist)
    return listItems.map((listItem) =>
      listItem.id === listItemToInitial.id
        ? { ...listItem, isDone: false }
        : listItem
    );
  console.log("2nd");
  return [...listItems];
};

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useLocalStorage("todo-list", []);

  const deleteTodoList = (listItemToDelete) => {
    setTodoList(todoListToDelete(todoList, listItemToDelete));
  };

  const finishTask = (listItemToComplete) => {
    setTodoList(taskSetToComplete(todoList, listItemToComplete));
  };

  const redoTask = (listItemToInitial) => {
    setTodoList(taskSetToInitial(todoList, listItemToInitial));
  };

  const value = {
    todoList,
    setTodoList,
    deleteTodoList,
    finishTask,
    redoTask,
  };

  console.log(todoList);

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
