import { ScrollView, Text, View } from "react-native";
import { Task } from "./task";
import { TaskProps } from "./interfaces";

export function TaskStatus() {
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
