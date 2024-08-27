import { SafeAreaView, View } from "react-native";
import { Logo } from "../../ui/logo";
import { Title } from "./title";
import { LoginForm } from "./form";
import { SingUpLink } from "./sign-up-link";
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
