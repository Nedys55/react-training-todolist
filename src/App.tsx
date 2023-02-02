import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header"
import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import { TasksList } from "./components/TasksList";
import { TaskType } from "./models/Task";

const App = () => {
  const title = "To do list";
  // const tasks = data;
  // const taskToEdit: any = null;
  const [showModal, setShowModal] = useState(false)
  const [tasks, setTasks] = useState(data)
  const [taskToEdit, setTaskToEdit] = useState<TaskType | null>(null)

  const updateTaskState = (taskId: number) => {
    
  };

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();
    if (taskToEditId == null) {
      const newTask: TaskType = {
        done: false,
        id: tasks[tasks.length - 1].id + 1,
        title: event.target.title.value,
        description: event.target.description.value,
      };
      setTasks([...tasks, newTask]);
    } else if (taskToEditId != null) {
      const taskEdit = tasks.find((task) => task.id === taskToEditId);
        if (taskEdit != null) { 
          taskEdit.title = event.target.title.value;
          taskEdit.description = event.target.description.value;
          setTaskToEdit(null);
      }
      console.log(taskEdit);
    }
    
    console.log(taskToEditId);
    setShowModal(false);

    // Autre Méthode
    // const newForm = new FormData(event.target);
    // const newTask = Object.fromEntries(newForm);

    // const taskPlusId: TaskType = {
    //   id: tasks[tasks.length - 1].id + 1,
    //   title: String(newTask.title),
    //   description: String(newTask.description),
    //   done: false,
    // };

    // setTasks((prev) => {prev.push(taskPlusId);
    //   return prev;
    // });
    // setShowModal(false);
  };

  const editTask = (taskId: number) => {
    const taskToUpdate= tasks.find((task) => task.id === taskId)
    if(taskToUpdate != null ) setTaskToEdit(taskToUpdate)
    setShowModal(true)
    // console.log(taskToUpdate)

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

    <TasksList tasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
    
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
