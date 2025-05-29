import { useState } from "react";

import type { Filter } from "@entities/task/types";
import { useTask } from "@entities/task/model/useTask";
import { TaskList } from "@entities/task/ui/task-list";
import { TaskInput } from "@components/task-input";
import { TaskFilters } from "@features/task-filters";

import s from "./TodoList.module.scss";

export function TodoList() {
  const [filter, setFilter] = useState<Filter>("all");
  const { addTask, toggleStatus, clearCompleted, filteredTasks, remaining } =
    useTask();
  return (
    <div className={s.todo}>
      <h2 className={s.title}>todos</h2>
      <div className={s.list}>
        <TaskInput onAdd={addTask} />
        <TaskList
          tasks={filteredTasks(filter)}
          filter={filter}
          onToggle={toggleStatus}
        />
        <TaskFilters
          currentFilter={filter}
          onChangeFilter={setFilter}
          remaining={remaining()}
          onClearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
}
