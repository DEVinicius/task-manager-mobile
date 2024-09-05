import { SafeAreaView, Text } from "react-native";
import { Header } from "../../components/header";
import { CreateTaskForm as Form } from "./form";
import { Title } from "../../components/title";
import { NavigationContextProvider } from "../../context/navigation.context";

//@ts-ignore
export function CreateTask({ navigation }) {
  return (
    <NavigationContextProvider navigation={navigation}>
      <SafeAreaView>
        <Header />
        <Title text="Criar nova Tarefa" />
        <Form />
      </SafeAreaView>
    </NavigationContextProvider>
  );
}
