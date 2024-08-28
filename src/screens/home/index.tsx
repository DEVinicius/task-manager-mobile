import { SafeAreaView, Text } from "react-native";
import { Header } from "./header";
import { TaskStatus } from "./task-status";

export function Home() {
  return (
    <SafeAreaView>
      <Header />
      <TaskStatus />
    </SafeAreaView>
  );
}
