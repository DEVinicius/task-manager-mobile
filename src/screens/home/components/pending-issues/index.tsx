import { Text, View } from "react-native";
import { Issue } from "./interfaces/issue";
import { Issue as IssueComponent } from "./issue";
import { useEffect, useState } from "react";
import { useTasks } from "../../../../hooks/use-tasks";
import { adaptTaskLogResponseToIssue } from "./adapter/adapt-task-log-response";

export function PendingIssues() {
  const [issues, setIssues] = useState<Issue[]>([]);

  const { tasksLogs, searchTaskLogs } = useTasks();

  async function searchIssues() {
    await searchTaskLogs();
  }

  useEffect(() => {
    const newIssues = tasksLogs.map((task) =>
      adaptTaskLogResponseToIssue(task)
    );
    setIssues(newIssues);
  }, [tasksLogs]);

  useEffect(() => {
    searchIssues();
  }, []);

  return (
    <View style={{ marginRight: "5%" }}>
      {issues.length > 0 ?? <Text>PENDÊNCIAS</Text>}
      <View style={{ marginTop: "5%" }}>
        {issues.map((issue) => {
          return (
            <IssueComponent
              key={issue.id}
              issue={issue}
              updateIssue={searchIssues}
            />
          );
        })}
      </View>
    </View>
  );
}
