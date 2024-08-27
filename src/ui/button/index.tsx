import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import { ButtonStyle } from "./style";

interface ButtonProps {
  text: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export function Button({ onPress, text }: ButtonProps) {
  return (
    <TouchableOpacity style={ButtonStyle.view} onPress={onPress}>
      <Text style={ButtonStyle.text}>{text}</Text>
    </TouchableOpacity>
  );
}
 