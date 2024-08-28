import { SafeAreaView, View } from "react-native";
import { Logo } from "../../ui/logo";
import { Title } from "./components/title";
import { LoginForm } from "./components/form";
import { SingUpLink } from "./components/sign-up-link";
import { LoginStyle } from "./style";

export function Login() {
  return (
    <SafeAreaView style={LoginStyle.safeAreaView}>
      <View>
        <Logo fontSize={36} />
        <Title />
        <LoginForm />
      </View>
      <SingUpLink /> 
    </SafeAreaView>
  );
}
