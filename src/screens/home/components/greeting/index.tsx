import { Text, View } from "react-native";

interface GreetingProps {
  name: string;
}

export function Greeting({ name }: GreetingProps) {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{ fontFamily: "Inter_700Bold", fontSize: 36 }}>
        Olá, {name}
      </Text>
      <Text style={{ fontFamily: "Inter_400Regular", fontSize: 22 }}>
        Tenha um excelente dia!
      </Text>
    </View>
  );
}
