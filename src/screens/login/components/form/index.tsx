import { useForm } from "react-hook-form";
import { View } from "react-native";
import { FormField } from "../../../../ui/form/field";
import { Button } from "../../../../ui/button";
import { validateForm } from "./functions";
import { useNavigation } from "../../../../hooks/use-navigation";
import { TASK_API } from "../../../../config/task-api";
import { setItem } from "../../../../config/storage";
import { useAuth } from "../../../../hooks/use-auth";

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

  const { navigation } = useNavigation();
  const { handleChangeAccessToken } = useAuth();

  const onSubmit = async (data: FormFields) => {
    try {
      data.email = data.email.toLowerCase();

      const login = await TASK_API.post("/user/auth", data);

      handleChangeAccessToken(login.data.access_token);

      // navigation.navigate("Home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View
      style={{
        marginTop: "15%",
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
