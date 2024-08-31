import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../../config/colors";

export const TaskCreatorStyle = StyleSheet.create({
  view: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: "8%",
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
