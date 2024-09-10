import { Text, View } from "react-native";
import { Issue as IssueInterface } from "../interfaces/issue";
import { Icon } from "./icon";
import { IssueStyle } from "./style";
import { Card } from "../../../../../components/card";
import { CHECKED_COLOR } from "../../../../../config/colors";
import { PENDENCY_COLOR } from "../../../../../config/colors";
import { TASK_API } from "../../../../../config/task-api";
import { useAuth } from "../../../../../hooks/use-auth";
import { useTasks } from "../../../../../hooks/use-tasks";

interface IssueProps {
  issue: IssueInterface;
  updateIssue: () => Promise<void>;
}

export function Issue({ issue, updateIssue }: IssueProps) {
  const { accessToken } = useAuth();
  const { searchTasks } = useTasks()

  const handleChangeTaskStatus = async (id: number) => {
    await TASK_API.patch(
      `/task-log/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    await Promise.all([
      updateIssue(),
      searchTasks()
    ])
  };

  return (
    <Card backgroundColor={issue.isChecked ? CHECKED_COLOR : PENDENCY_COLOR}>
      <Text style={IssueStyle.text}>{issue.name}</Text>
      <Icon
        isChecked={issue.isChecked}
        changeTaskStatus={handleChangeTaskStatus}
        id={issue.id}
      />
    </Card>
  );
}
