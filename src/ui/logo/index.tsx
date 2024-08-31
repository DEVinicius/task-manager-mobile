import { Text, View } from "react-native";

interface Logo {
  fontSize: number;
  color?: string
}

export function Logo({ fontSize, color = 'black' }: Logo) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize,
          color,
          fontFamily: "Inter_600SemiBold",
        }}
      >
        TaskManager
      </Text>
    </View>
  );
}
