import { Text, View } from "react-native";

interface TitleProps {
  text: string;
}

export function Title({ text }: TitleProps) {
  return (
    <View style={{ marginTop: "5%", paddingLeft: "5%" }}>
      <Text style={{ fontFamily: "Inter_700Bold", fontSize: 32 }}>
        {text}
      </Text>
    </View>
  );
}
