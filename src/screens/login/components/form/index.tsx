import { useForm } from "react-hook-form";
import { View } from "react-native";
import { FormField } from "../../../../ui/form/field";
import { Button } from "../../../../ui/button";
import { validateForm } from "./functions";
import { useNavigation } from "../../../../hooks/use-navigation";

export interface FormFields {
  email: string;
  password: string;
}

export function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { navigation } = useNavigation()

  const onSubmit = (data: FormFields) => {
    validateForm(data);

    navigation.navigate('Home')
  };

  return (
    <View
      style={{
        marginTop:'15%',
        paddingHorizontal: "10%",
        alignItems: "center",
      }}
    >
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

      <Button onPress={handleSubmit(onSubmit)} text="Entrar" />
    </View>
  );
}
