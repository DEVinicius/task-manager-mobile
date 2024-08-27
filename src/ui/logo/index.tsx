import { Text, View } from "react-native";

interface Logo {
  fontSize: number;
}

export function Logo({ fontSize }: Logo) {
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
          fontFamily: "Inter_600SemiBold",
        }}
      >
        TaskManager
      </Text>
    </View>
  );
}
