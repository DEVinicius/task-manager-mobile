import { Text, TouchableOpacity, View } from "react-native";
import TargetIcon from "../../../assets/target.svg";
import Home from "../../../assets/home.svg";
import Logout from "../../../assets/sair.svg";
import { useNavigation } from "../../../hooks/use-navigation";
import { useAuth } from "../../../hooks/use-auth";

interface LinksProps {
  handleCloseMenu: () => void;
}

export function Links({ handleCloseMenu }: LinksProps) {
  const { navigation } = useNavigation();
  const { handleChangeAccessToken } = useAuth();
  return (
    <View style={{ marginTop: "15%", alignItems: "center" }}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10
        }}
        onPress={() => {
          //ROTEAMENTO
          handleCloseMenu();
          navigation.navigate("Home");
        }}
      >
        <Home />
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
          marginBottom: 10,
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
          marginBottom: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          //ROTEAMENTO
          handleCloseMenu();
          handleChangeAccessToken(null);
        }}
      >
        <Logout />
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
