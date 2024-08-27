import { Text, View } from "react-native";
import { TitleStyle } from "./style";

export function Title() {
  return (
    <View style={TitleStyle.view}>
      <Text style={TitleStyle.text}>Acesse sua conta</Text>
    </View>
  );
}
