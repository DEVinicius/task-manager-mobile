import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from '../../config/colors'

export const HeaderStyle = StyleSheet.create({
  view: {
    backgroundColor: PRIMARY_COLOR,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    paddingVertical: "6%",
  },
});
