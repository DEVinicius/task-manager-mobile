import { TouchableOpacity, View } from "react-native";
import { PRIMARY_COLOR } from "../../config/colors";
import AddIcon from "../../assets/close-white.svg";
import { TaskCreatorStyle } from "./style";

export function TaskCreator() {
  return (
    <View style={TaskCreatorStyle.view}>
      <TouchableOpacity style={TaskCreatorStyle.button}>
        <AddIcon />
      </TouchableOpacity>
    </View>
  );
}
