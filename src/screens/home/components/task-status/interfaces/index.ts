export interface TaskProps {
  typeRecurrency: string;
  task: {
    name: string;
    times: {
      completed: number;
      total: number;
    };
  };
}
