import { Text, TouchableOpacity, View } from "react-native";
import TargetIcon from "../../../assets/target.svg";

export function Links() {
  return (
    <View style={{marginTop: '15%'}}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={() => {
          //ROTEAMENTO
          console.log('CLICADO')
        }}
      >
        <TargetIcon />
        <Text style={{fontFamily: 'Inter_500Medium', fontSize: 22, color: 'white', marginLeft: '8%'}}>Metas</Text>
      </TouchableOpacity>
    </View>
  );
}
