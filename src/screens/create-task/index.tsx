import { SafeAreaView, Text } from "react-native";
import { Header } from "../../components/header";
import { CreateTaskForm as Form } from "./form";
import { Title } from "../../components/title";
import { NavigationContextProvider } from "../../context/navigation.context";
import { TaskContextProvider } from "../../context/tasks/tasks.context";
import { useAuth } from "../../hooks/use-auth";

//@ts-ignore
export function CreateTask({ navigation }) {
  const { accessToken } = useAuth();
  return (
    <NavigationContextProvider navigation={navigation}>
      <TaskContextProvider accessToken={accessToken as string}>
        <SafeAreaView>
          <Header />
          <Title text="Criar nova Tarefa" />
          <Form />
        </SafeAreaView>
      </TaskContextProvider>
    </NavigationContextProvider>
  );
}
