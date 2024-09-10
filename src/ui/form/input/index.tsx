import {
  KeyboardTypeOptions,
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
  type: string;
  isSecureEntry?: boolean;
}

export function FormInput({
  placeHolder,
  onBlur,
  onChange,
  type = 'text',
  value,
  isSecureEntry = false,
}: FormFields) {
  function getKeyBoardType(type: string): KeyboardTypeOptions {
    const data = {
      text: "default",
      number: "numeric",
    };

    //@ts-ignore
    return data[type] as KeyboardTypeOptions;
  }

  return (
    <TextInput
      style={inputStyle.input}
      placeholder={placeHolder}
      placeholderTextColor={PRIMARY_COLOR}
      onBlur={onBlur}
      onChangeText={onChange}
      keyboardType={getKeyBoardType(type)}
      secureTextEntry={isSecureEntry}
      textContentType="none"
      //@ts-ignore
      value={value}
    />
  );
}
