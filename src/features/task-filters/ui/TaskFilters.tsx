import type { Filter } from "@entities/task/types";
import clsx from "clsx";

import s from "./TaskFilters.module.scss";

type TaskFiltersProps = {
  currentFilter: Filter;
  onChangeFilter: (filter: Filter) => void;
  activeCount: number;
  onClearCompleted: () => void;
};

const filters: Filter[] = ["all", "active", "completed"] as const;

export function TaskFilters({
  currentFilter,
  onChangeFilter,
  activeCount,
  onClearCompleted,
}: TaskFiltersProps) {
  return (
    <div className={s.task_filters}>
      <span>{activeCount} left</span>
      <div className={s.buttons}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => onChangeFilter(f)}
            className={clsx(currentFilter === f && s.active, s.btn)}
          >
            {f}
          </button>
        ))}
      </div>
      <button onClick={onClearCompleted} className={s.btn}>
        Clear completed
      </button>
    </div>
  );
}
