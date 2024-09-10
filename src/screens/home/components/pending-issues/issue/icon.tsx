import GrayCheckBoxIcon from "../../../../../assets/gray-check-box.svg";
import CheckedIcon from "../../../../../assets/checked-icon.svg";
import { TouchableOpacity } from "react-native";

interface IconProps {
  isChecked: boolean;
  id: number;
  changeTaskStatus: (id: number) => Promise<void>;
}

export function Icon({ isChecked, changeTaskStatus, id }: IconProps) {
  return isChecked ? (
    <CheckedIcon />
  ) : (
    <TouchableOpacity
      onPress={(event) => {
        changeTaskStatus(id);
      }}
    >
      <GrayCheckBoxIcon />
    </TouchableOpacity>
  );
}
