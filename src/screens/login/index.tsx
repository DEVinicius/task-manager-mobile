import { SafeAreaView, View } from "react-native";
import { Logo } from "../../ui/logo";
import { Title } from "./components/title";
import { LoginForm } from "./components/form";
import { SingUpLink } from "./components/sign-up-link";
import { LoginStyle } from "./style";
import { NavigationContextProvider } from "../../context/navigation.context";

//@ts-ignore
export function Login({ navigation }) {
  return (
    <NavigationContextProvider navigation={navigation}>
      <SafeAreaView style={LoginStyle.safeAreaView}>
        <View>
          <Logo fontSize={36} />
          <Title />
          <LoginForm />
        </View>
        <SingUpLink />
      </SafeAreaView>
    </NavigationContextProvider>
  );
}
