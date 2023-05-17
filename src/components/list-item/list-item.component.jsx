import { useContext } from "react";

import { ReactComponent as DeleteIcon } from "../../assets/images/delete.svg";
import { ReactComponent as UndoIcon } from "../../assets/images/undo.svg";
import { TodoContext } from "../../context/todo-list.context";

const ListItem = ({ listItem }) => {
  const { task, id, isDone } = listItem;

  const { deleteTodoList, finishTask, redoTask } = useContext(TodoContext);

  const handelDelete = () => deleteTodoList(listItem);

  const handelTaskComplete = () => finishTask(listItem);

  const handelTaskRedo = () => redoTask(listItem);

  return (
    <li className={`todo-list__item ${isDone ? "task-complete" : ""}`}>
      <div className="task__body">
        <input
          type="checkbox"
          id={id}
          onChange={handelTaskComplete}
          checked={isDone}
          disabled={isDone}
        />
        <label htmlFor={id}>
          <h2 className="task__heading">{task}</h2>
        </label>
      </div>
      {listItem.isDone ? (
        <a className="control-btn undo-btn" onClick={handelTaskRedo}>
          <UndoIcon className="icon" />
        </a>
      ) : (
        <a onClick={handelDelete} className="control-btn delete-btn">
          <DeleteIcon className="icon" />
        </a>
      )}
    </li>
  );
};

export default ListItem;
