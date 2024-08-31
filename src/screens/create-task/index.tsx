import { SafeAreaView, Text } from "react-native";
import { Header } from "../../components/header";
import { CreateTaskForm as Form } from "./form";
import { Title } from "../../components/title";

export function CreateTask() {
  return (
    <SafeAreaView>
      <Header />
      <Title text="Criar nova Tarefa" />
      <Form />
    </SafeAreaView>
  );
}
