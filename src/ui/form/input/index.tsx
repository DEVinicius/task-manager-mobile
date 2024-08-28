import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
} from "react-native";

import { inputStyle } from "./style";
import { PRIMARY_COLOR } from "../../../config/colors";

interface FormFields {
  placeHolder: string;
  onChange: (text: string) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  value: string;
  isSecureEntry?: boolean;
}

export function FormInput({
  placeHolder,
  onBlur,
  onChange,
  value,
  isSecureEntry = false,
}: FormFields) {
  return (
    <TextInput
      style={inputStyle.input}
      placeholder={placeHolder}
      placeholderTextColor={PRIMARY_COLOR}
      onBlur={onBlur}
      onChangeText={onChange}
      secureTextEntry={isSecureEntry}
      //@ts-ignore
      value={value}
    />
  );
}
