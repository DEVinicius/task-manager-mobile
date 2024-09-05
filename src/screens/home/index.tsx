import { SafeAreaView, ScrollView, Text } from "react-native";
import { Header } from "../../components/header";
import { TaskStatus } from "./components/task-status";
import { Greeting } from "./components/greeting";
import { PendingIssues } from "./components/pending-issues";
import { TaskCreator } from "../../components/task-creator";
import { NavigationContextProvider } from "../../context/navigation.context";

//@ts-ignore
export function Home({ navigation }) {
  return (
    <NavigationContextProvider navigation={navigation}>
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
    </NavigationContextProvider>
  );
}
