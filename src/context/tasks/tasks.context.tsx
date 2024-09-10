import { ReactNode, createContext, useEffect, useState } from "react";
import { TaskResponse } from "./interfaces/tasks-api.response";
import { TASK_API } from "../../config/task-api";
import { TaskLogResponse } from "./interfaces/task-log-api.response";

interface TasksContextData {
  tasks: TaskResponse[];
  tasksLogs: TaskLogResponse[];
  searchTasks: () => Promise<void>;
  searchTaskLogs: () => Promise<void>;
}

interface TaskContextProps {
  children: ReactNode;
  accessToken: string;
}

export const TasksContext = createContext({} as TasksContextData);

export function TaskContextProvider({ children, ...rest }: TaskContextProps) {
  const [tasks, setTasks] = useState<TaskResponse[]>([]);
  const [tasksLogs, setTasksLogs] = useState<TaskLogResponse[]>([]);

  async function searchTasks() {
    const tasks = await TASK_API.get<TaskResponse[]>("/task", {
      headers: {
        Authorization: `Bearer ${rest.accessToken}`,
      },
    });

    setTasks(tasks.data);
  }

  async function searchTaskLogs() {
    const searchTaskLogs = await TASK_API.get<TaskLogResponse[]>("/task-log", {
      headers: {
        Authorization: `Bearer ${rest.accessToken}`,
      },
    });

    setTasksLogs(searchTaskLogs.data);
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        tasksLogs,
        searchTasks,
        searchTaskLogs,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
