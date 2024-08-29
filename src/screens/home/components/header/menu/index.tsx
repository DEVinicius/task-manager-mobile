import { Text, View } from "react-native";
import Svg, { Image, Path, SvgUri, SvgXml } from "react-native-svg";
//@ts-ignore
import HamburgerMenu from "../../../../../assets/hamburger-white.svg";

export function Menu() {
  return (
    <View>
      <HamburgerMenu width={40} height={40} />
    </View>
  );
}
