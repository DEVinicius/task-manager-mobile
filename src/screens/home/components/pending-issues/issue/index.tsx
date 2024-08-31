import { Text, View } from "react-native";
import { Issue as IssueInterface } from "../interfaces/issue";
import { Icon } from "./icon";
import { IssueStyle } from "./style";
import { Card } from "../../../../../components/card";
import { CHECKED_COLOR } from "../../../../../config/colors";
import { PENDENCY_COLOR } from "../../../../../config/colors";

interface IssueProps {
  issue: IssueInterface;
}

export function Issue({ issue }: IssueProps) {
  return (
    <Card backgroundColor={issue.isChecked ? CHECKED_COLOR : PENDENCY_COLOR}>
      <Text style={IssueStyle.text}>{issue.name}</Text>
      <Icon isChecked={issue.isChecked} />
    </Card>
  );
}
