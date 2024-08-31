import { Text, View } from "react-native";
import { Logo } from "../../ui/logo";
import { Menu } from "./menu";
import { HeaderStyle } from "./style";
import { useCallback, useState } from "react";
import { PRIMARY_COLOR } from "../../config/colors";
import { Close } from "./close";
import { Links } from "./links";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handlePressMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  if (!isOpen) {
    return (
      <View style={HeaderStyle.view}>
        <Menu onPress={handlePressMenu} />
        <Logo fontSize={28} color="white" />
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: PRIMARY_COLOR,
        height: "100%",
        zIndex: 1,
      }}
    >
      <View style={HeaderStyle.view}>
        <Close onPress={handlePressMenu} />
        <Logo fontSize={28} color="white" />
      </View>
      <Links />
    </View>
  );
}
