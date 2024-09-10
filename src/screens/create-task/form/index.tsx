import { useForm } from "react-hook-form";
import { View } from "react-native";
import { FormField } from "../../../ui/form/field";
import { Button } from "../../../ui/button";
import { CreateTaskFormStyle } from "./style";
import { TASK_API } from "../../../config/task-api";
import { useAuth } from "../../../hooks/use-auth";
import { useNavigation } from "../../../hooks/use-navigation";
import { useTasks } from "../../../hooks/use-tasks";

interface FormFields {
  name: string;
  timesToComplete: number;
  motivationToExecute: string;
}

export function CreateTaskForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      timesToComplete: 1,
      motivationToExecute: "",
    },
  });

  const { accessToken } = useAuth();
  const { navigation } = useNavigation();
  const { searchTasks, searchTaskLogs } = useTasks();

  const onSubmit = async (data: FormFields) => {
    try {
      await TASK_API.post(
        "/task",
        {
          name: data.name,
          description: data.motivationToExecute,
          timesToComplete: Number(data.timesToComplete),
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      await Promise.all([await searchTaskLogs(), await searchTasks()]);
      navigation.push("Home");
    } catch (error) {
      console.log(JSON.stringify(error));
      console.error(error);
    }
  };

  return (
    <View style={CreateTaskFormStyle.view}>
      <FormField<FormFields>
        control={control}
        name="name"
        label="Nome"
        hasError={!!errors.name}
      />

      <FormField<FormFields>
        control={control}
        type="number"
        name="timesToComplete"
        label="Quantas vezes para criar o hábito?"
        hasError={!!errors.timesToComplete}
      />

      <FormField<FormFields>
        control={control}
        name="motivationToExecute"
        label="Por quê realizar essa tarefa?"
        hasError={!!errors.motivationToExecute}
      />

      <Button onPress={handleSubmit(onSubmit)} text="Criar" />
    </View>
  );
}
