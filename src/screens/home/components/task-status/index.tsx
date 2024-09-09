import { ScrollView, Text, View } from "react-native";
import { Task } from "./task";
import { TaskProps } from "./interfaces";
import { useEffect } from "react";
import { useAuth } from "../../../../hooks/use-auth";
import { TASK_API } from "../../../../config/task-api";

export function TaskStatus() {
  const { accessToken } = useAuth();
  async function searchTasks() {
    const tasks = await TASK_API.get("/task", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log(tasks.data)
  }
  useEffect(() => {
    searchTasks()
  }, []);
  const tasks: Array<TaskProps> = [
    {
      id: 1,
      typeRecurrency: "Agosto",
      task: {
        name: "Ler a Bíblia",
        times: {
          completed: 45,
          total: 80,
        },
      },
    },
    {
      id: 2,
      typeRecurrency: "Agosto",
      task: {
        name: "Treinar",
        times: {
          completed: 6,
          total: 30,
        },
      },
    },
    {
      id: 3,
      typeRecurrency: "Anual",
      task: {
        name: "Escrever Artigo",
        times: {
          completed: 25,
          total: 180,
        },
      },
    },
  ];

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
