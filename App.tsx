import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp } from "./src/screens/sign-up";

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start asd on you app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Inter_600SemiBold",
    backgroundColor: "#F8F8FF",
    alignItems: "center",
    justifyContent: "center",
  },
});
