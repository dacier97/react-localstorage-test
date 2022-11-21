import { useState } from "react";

function TaskCreator({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    /*localStorage.setItem("tasks", newTaskName);*/
    setNewTaskName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='my-2 row'>
        <div className="col-9">
        <input
          type="text"
          value={newTaskName}
          placeholder="enter new task"
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        </div>
        <div className="col-3">
          <button className="btn btn-primary btn-sm">save task</button>
        </div>
      </form>
    </div>
  );
}

export default TaskCreator;
