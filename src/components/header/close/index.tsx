import { TouchableOpacity } from "react-native";
//@ts-ignore
import CloseIcon from "../../../assets/close-white.svg";

interface CloseProps {
  onPress: () => void;
}

export function Close({ onPress }: CloseProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <CloseIcon width={40} height={40} />
    </TouchableOpacity>
  );
}
