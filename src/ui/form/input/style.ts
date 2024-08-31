import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../../../config/colors";

export const inputStyle = StyleSheet.create({
  input: {
    borderColor: PRIMARY_COLOR,
    fontFamily: "Inter_300Light",
    borderWidth: 2,
    borderRadius: 5,
    padding: 12,
    width: "100%",
    color: "black",
  },
});
