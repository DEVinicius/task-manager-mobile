import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
} from "react-native";

import { inputStyle } from "./style";

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
      placeholderTextColor={"#BA7149"}
      onBlur={onBlur}
      onChangeText={onChange}
      secureTextEntry={isSecureEntry}
      //@ts-ignore
      value={value}
    />
  );
}
