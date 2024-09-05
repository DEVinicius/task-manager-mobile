import { TouchableOpacity, View } from "react-native";
import AddIcon from "../../assets/add-white.svg";
import { TaskCreatorStyle } from "./style";
import { useNavigation } from "../../hooks/use-navigation";

export function TaskCreator() {
  const { navigation } = useNavigation();
  return (
    <View style={TaskCreatorStyle.view}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CreateTask');
        }}
        style={TaskCreatorStyle.button}
      >
        <AddIcon />
      </TouchableOpacity>
    </View>
  );
}
