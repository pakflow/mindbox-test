import type { Task } from "../../types";
import { TaskItem } from "../task-item";

import s from "./TaskList.module.scss";

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: number) => void;
};

export function TaskList({ tasks, onToggle }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className={s.empty}>No tasks</p>;
  }

  return (
    <ul className={s.task_list}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </ul>
  );
}
