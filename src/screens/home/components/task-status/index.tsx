import { ScrollView, Text, View } from "react-native";
import { Task } from "./task";
import { TaskProps } from "./interfaces";
import { useEffect, useState } from "react";
import { useTasks } from "../../../../hooks/use-tasks";

interface TaskResponse {
  description: string;
  id: number;
  name: string;
  timesExecuted: number;
  timesToComplete: number;
}

function getTimeRecurrency(times: number): string {
  if (times < 31) return "Mensal";
  if (times < 61) return "Bimestral";
  if (times < 90) return "Trimestral";
  if (times < 120) return "Semestral";
  return "Anual";
}

function adaptAPIResponseToModel(data: TaskResponse): TaskProps {
  return {
    id: data.id,
    task: {
      name: data.name,
      times: {
        completed: data.timesExecuted,
        total: data.timesToComplete,
      },
    },
    typeRecurrency: getTimeRecurrency(data.timesToComplete),
  };
}

export function TaskStatus() {
  const { tasks, searchTasks } = useTasks();

  const [taskStatus, setTaskStatus] = useState<TaskProps[]>([]);

  async function populateTasks() {
    await searchTasks();
  }

  useEffect(() => {
    console.log('ATUALIZACAO TASK ESTADO')
    setTaskStatus(tasks.map((task) => adaptAPIResponseToModel(task)));
  }, [tasks]);

  useEffect(() => {
    populateTasks();
  }, []);

  return (
    <View style={{ marginVertical: 40 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {taskStatus.map((task) => (
          <Task
            typeRecurrency={task.typeRecurrency}
            key={task.id}
            task={task.task}
          />
        ))}
      </ScrollView>
    </View>
  );
}
