import { Text, View } from "react-native";
import { TaskStyle } from "./style";
import { TaskProps } from "../interfaces";
import { FooterProgressBarStyle } from "./footer-progress-bar.style";

export function Task({ typeRecurrency, task }: TaskProps) {
  const percentageCompleted = Math.round(
    (task.times.completed / task.times.total) * 100
  );

  return (
    <View style={TaskStyle.body}>
      <View style={TaskStyle.header}>
        <Text style={TaskStyle.headerText}>{typeRecurrency}</Text>
      </View>
      <View style={TaskStyle.main}>
        <Text style={TaskStyle.mainTitle}>{task.name}</Text>
        <Text style={TaskStyle.mainProgress}>
          {task.times.completed} / {task.times.total}
        </Text>
      </View>
      <View>
        <View style={TaskStyle.footerProgress}>
          <Text style={TaskStyle.footerProgressText}>Progresso</Text>
          <Text style={TaskStyle.footerProgressNumber}>
            {percentageCompleted}%
          </Text>
        </View>
        <View style={TaskStyle.footerProgressBarFull}>
          <View
            style={FooterProgressBarStyle(`${percentageCompleted}%`)}
          ></View>
        </View>
      </View>
    </View>
  );
}
