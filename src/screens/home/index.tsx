import { SafeAreaView, ScrollView, Text } from "react-native";
import { Header } from "../../components/header";
import { TaskStatus } from "./components/task-status";
import { Greeting } from "./components/greeting";
import { PendingIssues } from "./components/pending-issues";
import { TaskCreator } from "../../components/task-creator";
import { NavigationContextProvider } from "../../context/navigation.context";
import { useEffect } from "react";
import { useAuth } from "../../hooks/use-auth";
import { TaskContextProvider } from "../../context/tasks/tasks.context";

//@ts-ignore
export function Home({ navigation }) {
  const { accessToken } = useAuth();
  
  return (
    <NavigationContextProvider navigation={navigation}>
      <TaskContextProvider accessToken={accessToken as string}>
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
      </TaskContextProvider>
    </NavigationContextProvider>
  );
}
