import { Text, View } from "react-native";
import { Issue as IssueInterface } from "../interfaces/issue";
import { Icon } from "./icon";
import { IssueStyle, IssueViewStyle } from "./style";

interface IssueProps {
  issue: IssueInterface;
}

export function Issue({ issue }: IssueProps) {
  return (
    <View style={IssueViewStyle({ isChecked: issue.isChecked })}>
      <Text style={IssueStyle.text}>{issue.name}</Text>
      <Icon isChecked={issue.isChecked} />
    </View>
  );
}
