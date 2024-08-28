import { Text, View } from "react-native";
import { PRIMARY_COLOR } from "../../../config/colors";
import { Logo } from "../../../ui/logo";
import { Menu } from "./menu";

export function Header() {
  return (
    <View
      style={{
        backgroundColor: PRIMARY_COLOR,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "5%",
        paddingVertical: "6%",
      }}
    >
      <Menu />
      <Logo fontSize={28} color="white" />
    </View>
  );
}
