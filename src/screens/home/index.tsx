import { SafeAreaView, ScrollView, Text } from "react-native";
import { Header } from "./components/header";
import { TaskStatus } from "./components/task-status";

export function Home() {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView
        style={{
          position: "relative",
          height: '100%'
        }}
      >
        <TaskStatus />
      </ScrollView>
    </SafeAreaView>
  );
}
