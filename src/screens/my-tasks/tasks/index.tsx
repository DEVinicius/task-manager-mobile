import { ScrollView } from "react-native";
import { Title } from "../../../components/title";
import { Task } from "./interfaces";
import { TaskList } from "./list";

export function Tasks() {
  const myTasks: Task[] = [
    {
      id: 1,
      name: "Ler a Bíblia",
      target: 120,
      timesCompleted: 30,
    },
    {
      id: 2,
      name: "Desenhar um caderno",
      target: 200,
      timesCompleted: 50,
    },
    {
      id: 3,
      name: "Desenhar um caderno em uma garrafa",
      target: 200,
      timesCompleted: 12,
    },
  ];

  return (
    <ScrollView
      style={{
        height: "80%",
      }}
    >
      <Title text="Minhas Tarefas" />
      <TaskList tasks={myTasks} />
    </ScrollView>
  );
}
