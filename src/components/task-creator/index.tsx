import { TouchableOpacity, View } from "react-native";
import AddIcon from "../../assets/add-white.svg";
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
