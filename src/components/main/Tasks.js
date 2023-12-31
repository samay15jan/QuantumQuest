import React from "react";
import Task from "./Task";

const Tasks = ({ sectionTasks, onDelete, onToggle }) => {
  return (
    <>
      {sectionTasks.map((task) => {
        return (
          <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        );
      })}
    </>
  );
};


export default Tasks;