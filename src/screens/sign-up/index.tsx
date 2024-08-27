import { SafeAreaView, Text, View } from "react-native";
import { Logo } from "../../ui/logo";
import { SignUpForm } from "./form";
import { Title } from "./title";

export function SignUp() {
  return (
    <SafeAreaView>
      <Logo fontSize={36} />
      <Title />
      <SignUpForm />
    </SafeAreaView>
  );
}
