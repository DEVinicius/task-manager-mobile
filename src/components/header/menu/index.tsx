import { TouchableOpacity } from "react-native";
//@ts-ignore
import HamburgerMenu from "../../../assets/hamburger-white.svg";

interface MenuProps {
  onPress: () => void;
}

export function Menu({ onPress }: MenuProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <HamburgerMenu width={40} height={40} />
    </TouchableOpacity>
  );
}
