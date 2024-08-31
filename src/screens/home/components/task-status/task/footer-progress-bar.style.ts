import { DimensionValue, StyleProp, ViewStyle } from "react-native";

interface FooterProgressBarResponse {
  backgroundColor: string;
  borderRadius: number;
  height: number;
  width: string;
}

export function FooterProgressBarStyle(
  width: DimensionValue
): StyleProp<ViewStyle> {
  return {
    backgroundColor: "white",
    borderRadius: 5,
    height: 5,
    width,
  };
}
