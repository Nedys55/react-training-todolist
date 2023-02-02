import React from "react";
import "./TasksList.css"
import { TaskType } from "../models/Task";
import { Task } from "./Task";

type TaskListsProps = {
    tasks: TaskType[];
    deleteTask: (taskId: number) => void;
    editTask:  (taskId: number) => void

}


export const TasksList = ({tasks, deleteTask, editTask}: TaskListsProps) => {
    return (
        <div className="list-container">
            {tasks.map((item: TaskType) => (
                <Task task={item} deleteTask={deleteTask} editTask={editTask}/>
            ))}
        </div>
    )
}