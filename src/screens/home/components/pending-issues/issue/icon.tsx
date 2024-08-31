import GrayCheckBoxIcon from "../../../../../assets/gray-check-box.svg";
import CheckedIcon from "../../../../../assets/checked-icon.svg";

export function Icon({ isChecked }: { isChecked: boolean }) {
  return isChecked ? <CheckedIcon /> : <GrayCheckBoxIcon />;
}
