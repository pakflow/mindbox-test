import type { Filter, Task } from "../../types";
import { TaskItem } from "../task-item";

import s from "./TaskList.module.scss";

type TaskListProps = {
  tasks: Task[];
  filter: Filter;
  onToggle: (id: number) => void;
};

export function TaskList({ tasks, filter, onToggle }: TaskListProps) {
  const filtered = tasks.filter((task) => {
    if (filter === "all") return true;
    return task.status === filter;
  });

  if (filtered.length === 0) {
    return <p style={{ textAlign: "center", color: "#aaa" }}>No tasks</p>;
  }

  return (
    <ul className={s.task_list}>
      {filtered.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </ul>
  );
}
