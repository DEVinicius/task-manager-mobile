import { SafeAreaView, Text, View } from "react-native";
import { Logo } from "../../ui/logo";
import { SignUpForm } from "./components/form";
import { Title } from "./components/title";
import { NavigationContextProvider } from "../../context/navigation.context";

//@ts-ignore
export function SignUp({ navigation }) {
  return (
    <NavigationContextProvider navigation={navigation}>
      <SafeAreaView>
        <View style={{ marginTop: "5%" }}>
          <Logo fontSize={36} />
          <Title />
          <SignUpForm />
        </View>
      </SafeAreaView>
    </NavigationContextProvider>
  );
}
