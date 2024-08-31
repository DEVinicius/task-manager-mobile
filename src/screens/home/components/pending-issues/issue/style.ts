import { StyleSheet, ViewStyle } from "react-native";
import { CHECKED_COLOR, PENDENCY_COLOR } from "../../../../../config/colors";

interface IssueViewStyleProps {
  isChecked: boolean;
}

export function IssueViewStyle({ isChecked }: IssueViewStyleProps): ViewStyle {
  return {
    backgroundColor: isChecked ? CHECKED_COLOR : PENDENCY_COLOR,
    marginBottom: "4%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "3%",
    alignItems: "center",
    borderRadius: 8,
  };
}

export const IssueStyle = StyleSheet.create({
  text: {
    fontFamily: "Inter_700Bold",
    fontSize: 22,
    color: "white",
  },
});
