import { Text, View } from "react-native";
import { TitleStyle } from "./style";

export function Title() {
  return (
    <View style={TitleStyle.view}>
      <Text style={TitleStyle.text}>Realize o seu cadastro</Text>
    </View>
  );
}
