export interface TaskLogResponse {
  createdAt: string;
  id: number;
  isDone: boolean;
  task: {
    description: string;
    id: number;
    name: string;
    timesExecuted: number;
    timesToComplete: number;
  };
}
