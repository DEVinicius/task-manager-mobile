import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../../config/colors";

export const ButtonStyle = StyleSheet.create({
  view: {
    backgroundColor: PRIMARY_COLOR,
    height: 40,
    borderRadius: 5,
    marginTop: "5%",
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
