import clsx from "clsx";
import type { Task } from "../../types";

import s from "./TaskItem.module.scss";

type TaskItemProps = {
  task: Task;
  onToggle: (id: number) => void;
};

export function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <li>
      <label className={s.task_item}>
        <input
          type="checkbox"
          checked={task.status === "completed"}
          onChange={() => onToggle(task.id)}
        />
        <span
          className={clsx(s.text, task.status === "completed" && s.completed)}
        >
          {task.text}
        </span>
      </label>
    </li>
  );
}
