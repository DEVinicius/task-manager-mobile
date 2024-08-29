import { ScrollView, Text, View } from "react-native";
import { Task } from "./task";

export function TaskStatus() {
  return (
    <View style={{marginVertical: 40}}>
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
