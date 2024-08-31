import { ViewStyle } from "react-native";

export function CardStyle(backgroundColor: string): ViewStyle {
  return {
    marginBottom: "4%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "3%",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor,
  };
}
