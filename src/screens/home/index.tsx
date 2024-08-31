import { SafeAreaView, ScrollView, Text } from "react-native";
import { Header } from "../../components/header";
import { TaskStatus } from "./components/task-status";
import { Greeting } from "./components/greeting";
import { PendingIssues } from "./components/pending-issues";
import { TaskCreator } from "../../components/task-creator";

export function Home() {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView
        style={{
          position: "relative",
          height: "80%",
          marginLeft: 15,
        }}
      >
        <Greeting name="Vinícius" />
        <TaskStatus />
        <PendingIssues />
      </ScrollView>
      <TaskCreator />
    </SafeAreaView>
  );
}
