import { SafeAreaView, View } from "react-native";
import { Header } from "../../components/header";
import { TaskCreator } from "../../components/task-creator";
import { Tasks } from "./tasks";

export function MyTasks() {
  return (
    <SafeAreaView>
      <Header />
      <Tasks />
      <TaskCreator />
    </SafeAreaView>
  );
}
