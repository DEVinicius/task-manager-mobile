import { Text, TouchableOpacity, View } from "react-native";
import TargetIcon from "../../../assets/target.svg";
import { useNavigation } from "../../../hooks/use-navigation";

interface LinksProps {
  handleCloseMenu: () => void;
}

export function Links({ handleCloseMenu }: LinksProps) {
  const { navigation } = useNavigation();
  return (
    <View style={{ marginTop: "15%" }}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          //ROTEAMENTO
          handleCloseMenu();
          navigation.navigate("Home");
        }}
      >
        <TargetIcon />
        <Text
          style={{
            fontFamily: "Inter_500Medium",
            fontSize: 22,
            color: "white",
            marginLeft: "8%",
          }}
        >
          Página Inicial
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          //ROTEAMENTO
          handleCloseMenu();
          navigation.navigate("MyTasks");
        }}
      >
        <TargetIcon />
        <Text
          style={{
            fontFamily: "Inter_500Medium",
            fontSize: 22,
            color: "white",
            marginLeft: "8%",
          }}
        >
          Metas
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          //ROTEAMENTO
          handleCloseMenu();
          navigation.navigate("Login");
        }}
      >
        <TargetIcon />
        <Text
          style={{
            fontFamily: "Inter_500Medium",
            fontSize: 22,
            color: "white",
            marginLeft: "8%",
          }}
        >
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
}
