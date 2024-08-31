import { View } from "react-native";
import { Logo } from "../../ui/logo";
import { Menu } from "./menu";
import { HeaderStyle } from "./style";

export function Header() {
  return (
    <View style={HeaderStyle.view}>
      <Menu />
      <Logo fontSize={28} color="white" />
    </View>
  );
}
