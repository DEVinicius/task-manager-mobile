import { TaskLogResponse } from "../../../../../context/tasks/interfaces/task-log-api.response";
import { Issue } from "../interfaces/issue";

export function adaptTaskLogResponseToIssue(taskLog: TaskLogResponse): Issue {
  return {
    id: taskLog.id,
    isChecked: taskLog.isDone,
    name: taskLog.task.name,
  };
}
