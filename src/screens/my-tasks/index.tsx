import { SafeAreaView, View } from "react-native";
import { Header } from "../../components/header";
import { TaskCreator } from "../../components/task-creator";
import { Tasks } from "./tasks";
import { NavigationContextProvider } from "../../context/navigation.context";

//@ts-ignore
export function MyTasks({ navigation }) {
  return (
    <NavigationContextProvider navigation={navigation}>
      <SafeAreaView>
        <Header />
        <Tasks />
        <TaskCreator />
      </SafeAreaView>
    </NavigationContextProvider>
  );
}
