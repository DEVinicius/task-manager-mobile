import { Text, View } from "react-native";
import { Issue } from "./interfaces/issue";
import { Issue as IssueComponent } from "./issue";

export function PendingIssues() {
  const issues: Issue[] = [
    {
      id: 1,
      isChecked: true,
      name: "Ler a bíblia",
    },
    {
      id: 2,
      isChecked: false,
      name: "Treinar",
    },
    {
      id: 3,
      isChecked: false,
      name: "Tomar Água",
    },
  ];
  return (
    <View style={{ marginRight: "5%" }}>
      <Text>PENDENCIAS</Text>
      <View style={{ marginTop: "5%" }}>
        {issues.map((issue) => {
          return <IssueComponent key={issue.id} issue={issue} />;
        })}
      </View>
    </View>
  );
}
