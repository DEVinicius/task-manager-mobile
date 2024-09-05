import { Text, View } from "react-native";
import { Task } from "../interfaces";
import { Card } from "../../../../components/card";
import { PRIMARY_COLOR } from "../../../../config/colors";

interface TaskListProps {
  tasks: Task[];
}

function reduceWord(word: string, maxLetters: number) {
  if (word.length <= maxLetters) return word;

  return `${word.substring(0, maxLetters)}...`;
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <View style={{ marginTop: "10%", paddingHorizontal: "5%" }}>
      {tasks.map((task) => (
        <Card key={task.id} backgroundColor={PRIMARY_COLOR}>
          <View style={{ maxWidth: "80%" }}>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontFamily: "Inter_600SemiBold",
              }}
            >
              {" "}
              {reduceWord(task.name, 20)}
            </Text>
          </View>
          <View>
            <Text style={{ color: "white" }}>
              {task.timesCompleted} / {task.target}
            </Text>
          </View>
        </Card>
      ))}
    </View>
  );
}
