import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { FormField } from "../../../ui/form/field";
import { Button } from "../../../ui/button";
import { validateForm } from "./functions";

export interface FormFields {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function SignUpForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: FormFields) => {
    validateForm(data);
  };

  return (
    <View
      style={{
        paddingHorizontal: "10%",
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
        name="email"
        label="E-mail"
        hasError={!!errors.email}
      />

      <FormField<FormFields>
        control={control}
        name="password"
        label="Senha"
        hasError={!!errors.password}
        isSecureTextEntry={true}
      />

      <FormField<FormFields>
        control={control}
        name="confirmPassword"
        label="Confirme a Senha"
        hasError={!!errors.confirmPassword}
        isSecureTextEntry={true}
      />

      <Button onPress={handleSubmit(onSubmit)} text="Salvar" />
    </View>
  );
}
