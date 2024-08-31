import { TouchableOpacity, View } from "react-native";
import { PRIMARY_COLOR } from "../../config/colors";
import AddIcon from "../../assets/close-white.svg";

export function TaskCreator() {
  return (
    <View
      style={{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: '8%'
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: PRIMARY_COLOR,
          justifyContent: "center",
          alignItems: "center",
          width: 60,
          height: 60,
          borderRadius: 50,
        }}
      >
        <AddIcon />
      </TouchableOpacity>
    </View>
  );
}
