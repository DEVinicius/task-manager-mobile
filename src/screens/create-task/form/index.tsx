import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { FormField } from "../../../ui/form/field";
import { Button } from "../../../ui/button";

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
  
  const onSubmit = (data: FormFields) => {
  };

  return (
    <View
      style={{
        marginTop: "15%",
        paddingHorizontal: "5%",
        alignItems: "center",
      }}
    >
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
