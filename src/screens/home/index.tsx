import { SafeAreaView, Text } from "react-native";
import { Header } from "./components/header";
import { TaskStatus } from "./components/task-status";

export function Home() {
  return (
    <SafeAreaView>
      <Header />
      <TaskStatus />
    </SafeAreaView>
  );
}
