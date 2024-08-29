import { Text, View } from "react-native";
import { TaskStyle } from "./style";

export function Task() {
  return (
    <View style={TaskStyle.body}>
      <View style={TaskStyle.header}>
        <Text style={TaskStyle.headerText}>Header</Text>
      </View>
      <View style={TaskStyle.main}>
        <Text style={TaskStyle.mainTitle}>Main</Text>
        <Text style={TaskStyle.mainProgress}>7 / 10</Text>
      </View>
      <View>
        <View style={TaskStyle.footerProgress}>
          <Text style={TaskStyle.footerProgressText}>Progresso</Text>
          <Text style={TaskStyle.footerProgressNumber}>70%</Text>
        </View>
        <View style={TaskStyle.footerProgressBarFull}>
          <View style={TaskStyle.footerProgressBar}></View>
        </View>
      </View>
    </View>
  );
}
