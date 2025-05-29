import { renderHook, act } from "@testing-library/react";
import { useTask } from "./useTask";

describe("useTask", () => {
  it("добавляет новую задачу", () => {
    const { result } = renderHook(() => useTask());

    act(() => {
      result.current.addTask("Test task");
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].text).toBe("Test task");
    expect(result.current.tasks[0].status).toBe("active");
  });

  it("переключает статус задачи", () => {
    const { result } = renderHook(() => useTask());

    act(() => {
      result.current.addTask("Toggle me");
    });

    const id = result.current.tasks[0].id;

    act(() => {
      result.current.toggleStatus(id);
    });

    expect(result.current.tasks[0].status).toBe("completed");

    act(() => {
      result.current.toggleStatus(id);
    });

    expect(result.current.tasks[0].status).toBe("active");
  });

  it("очищает completed задачи", () => {
    const { result } = renderHook(() => useTask());

    act(() => {
      result.current.addTask("Task 1");
    });

    act(() => {
      result.current.addTask("Task 2");
    });

    const secondId = result.current.tasks[1].id;

    act(() => {
      result.current.toggleStatus(secondId);
    });

    act(() => {
      result.current.clearCompleted();
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].status).toBe("active");
  });

  it("фильтрует задачи по статусу", () => {
    const { result } = renderHook(() => useTask());

    act(() => {
      result.current.addTask("Task 1");
    });

    act(() => {
      result.current.addTask("Task 2");
    });

    const secondId = result.current.tasks[1].id;

    act(() => {
      result.current.toggleStatus(secondId);
    });

    const all = result.current.getFilteredTasks("all");
    const active = result.current.getFilteredTasks("active");
    const completed = result.current.getFilteredTasks("completed");

    expect(all).toHaveLength(2);
    expect(active).toHaveLength(1);
    expect(completed).toHaveLength(1);
    expect(completed[0].text).toBe("Task 2");
  });

  it("считает количество активных задач", () => {
    const { result } = renderHook(() => useTask());

    act(() => {
      result.current.addTask("Task 1");
      result.current.addTask("Task 2");
    });

    expect(result.current.activeCount).toBe(2);

    act(() => {
      result.current.toggleStatus(result.current.tasks[0].id);
    });

    expect(result.current.activeCount).toBe(1);
  });
});
