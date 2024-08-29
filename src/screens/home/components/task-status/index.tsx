import { ScrollView, Text, View } from "react-native";
import { Task } from "./task";

export function TaskStatus() {
  return (
    <View>
      <Text>TESTE</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </ScrollView>
    </View>
  );
}
