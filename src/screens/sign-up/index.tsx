import { SafeAreaView, Text, View } from "react-native";
import { Logo } from "../../ui/logo";
import { SignUpForm } from "./form";
import { Title } from "./title";

export function SignUp() {
  return (
    <SafeAreaView>
      <View style={{ marginTop: "5%" }}>
        <Logo fontSize={36} />
        <Title />
        <SignUpForm />
      </View>
    </SafeAreaView>
  );
}
