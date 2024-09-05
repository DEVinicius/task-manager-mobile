import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "../../../../ui/button";
import { useNavigation } from "../../../../hooks/use-navigation";

export function SingUpLink() {
  const { navigation } = useNavigation();
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20%",
      }}
    >
      <Button onPress={() => {
        navigation.navigate('SignUp')
      }} text="Realizar Cadastro" />
    </View>
  );
}
