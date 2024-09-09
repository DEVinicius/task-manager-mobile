import { ScrollView, Text, View } from "react-native";
import { Task } from "./task";
import { TaskProps } from "./interfaces";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../hooks/use-auth";
import { TASK_API } from "../../../../config/task-api";

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
  const { accessToken } = useAuth();

  const [tasks, setTasks] = useState<TaskProps[]>([]);

  async function searchTasks() {
    const tasks = await TASK_API.get<TaskResponse[]>("/task", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    setTasks(tasks.data.map((task) => adaptAPIResponseToModel(task)));
  }

  useEffect(() => {
    searchTasks();
  }, []);

  return (
    <View style={{ marginVertical: 40 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {tasks.map((task) => (
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
