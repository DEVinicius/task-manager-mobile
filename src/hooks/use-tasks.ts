import { useContext } from "react";
import { TasksContext } from "../context/tasks/tasks.context";

export function useTasks() {
  return useContext(TasksContext);
}
