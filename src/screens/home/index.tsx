import { SafeAreaView, ScrollView, Text } from "react-native";
import { Header } from "./components/header";
import { TaskStatus } from "./components/task-status";
import { Greeting } from "./components/greeting";

export function Home() {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView
        style={{
          position: "relative",
          height: "100%",
          marginLeft: 15
        }}
      >
        <Greeting />
        <TaskStatus />
      </ScrollView>
    </SafeAreaView>
  );
}
