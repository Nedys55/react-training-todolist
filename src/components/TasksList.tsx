import React from "react";
import "./TasksList.css"
import { TaskType } from "../models/Task";
import { Task } from "./Task";

type TaskListsProps = {
    tasks: TaskType[];

}


export const TasksList = ({tasks}: TaskListsProps) => {
    return (
        <div className="list-container">
            {tasks.map((item: TaskType) => (
                <Task task={item}/>
            ))}
        </div>
    )
}