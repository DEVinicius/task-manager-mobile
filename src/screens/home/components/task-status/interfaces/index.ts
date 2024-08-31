export interface TaskProps {
  id?: number;
  typeRecurrency: string;
  task: {
    name: string;
    times: {
      completed: number;
      total: number;
    };
  };
}
