import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header"
import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import { TasksList } from "./components/TasksList";

const App = () => {
  const title = "To do list";
  // const tasks = data;
  const taskToEdit: any = null;
  const [showModal, setShowModal] = useState(false)
  const [tasks, setTasks] = useState (data)

  const updateTaskState = (taskId: number) => {
    
  };

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();
    const newForm = new FormData(event.target)
    const newTask = Object.fromEntries(newForm)

    const taskPlusId = {
      id: tasks.length + 1,
      title: String(newTask.title),
      description: String(newTask.description),
      done: false
    }

    tasks.push(taskPlusId)
    setShowModal(false)
  };

  const editTask = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const deleteTask = (taskId: number) => {
    const copyTask = tasks.filter((task) => task.id !==taskId)
    setTasks(copyTask)
  };

  return (
    <div className="main">
      <Header 
        title={title}
      />

    <TasksList tasks={tasks} deleteTask={deleteTask}/>
    
      <button
        className="add-task-btn"
        onClick={() => setShowModal(true)}
      >
        +
      </button>
      <TaskFormModal
        show={showModal}
        handleClose={() => {setShowModal(false)}}
        addOrEditTask={addOrEditTask}
        initialValues={
          taskToEdit != null
            ? {
                id: taskToEdit.id,
                title: taskToEdit.title,
                description: taskToEdit.description,
              }
            : undefined
        }
      />
    </div>
  );
};

export default App;
