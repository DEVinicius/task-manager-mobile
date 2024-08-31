import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../../../../../config/colors";

export const TaskStyle = StyleSheet.create({
  body: {
    backgroundColor: PRIMARY_COLOR,
    marginRight: 25,
    minWidth: 250,
    padding: 10,
    borderRadius: 8,
  },
  header: {
    alignItems: "flex-end",
  },
  headerText: {
    color: "white",
    fontFamily: "Inter_400Regular",
    fontSize: 18,
  },
  main: {
    marginVertical: 30,
    alignItems: "flex-start",
  },
  mainTitle: {
    fontSize: 26,
    fontFamily: "Inter_700Bold",
    color: "white",
  },
  mainProgress: {
    color: "white",
    fontSize: 14,
  },
  footerProgress: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerProgressText: {
    color: "white",
    fontSize: 20,
  },
  footerProgressNumber: {
    color: "white",
    fontSize: 16,
  },
  footerProgressBarFull: {
    backgroundColor: "#c3c3c3",
    borderRadius: 5,
    height: 5,
    marginTop: 10,
    marginBottom: 25,
  },
  footerProgressBar: {
    backgroundColor: "white",
    borderRadius: 5,
    height: 5,
    width: "70%",
  },
});
