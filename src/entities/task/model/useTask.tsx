import { useState } from "react";
import type { Filter, Task } from "../types";

let idCounter = 0;

export function useTask() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: idCounter++,
      text,
      status: "active",
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const toggleStatus = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "completed" ? "active" : "completed",
            }
          : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => task.status !== "completed"));
  };

  const filteredTasks = (filter: Filter) => {
    if (filter === "all") {
      return tasks;
    }

    return tasks.filter((task) => task.status === filter);
  };

  const remaining = () =>
    tasks.filter((task) => task.status === "active").length;

  return {
    tasks,
    addTask,
    toggleStatus,
    clearCompleted,
    filteredTasks,
    remaining,
  };
}
