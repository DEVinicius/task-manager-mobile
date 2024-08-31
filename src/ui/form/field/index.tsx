import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Text, View } from "react-native";
import { FormInput } from "../input";
import { FieldStyle } from "./style";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  type?: string;
  isSecureTextEntry?: boolean;
  hasError: boolean;
}

export function FormField<T extends FieldValues>({
  control,
  name,
  label,
  hasError,
  type = 'text',
  isSecureTextEntry = false,
}: FormFieldProps<T>) {
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={FieldStyle.view}>
          <Text style={FieldStyle.text}>{label}</Text>
          <FormInput
            placeHolder="Digite aqui"
            onBlur={onBlur}
            onChange={onChange}
            type={type}
            isSecureEntry={isSecureTextEntry}
            //@ts-ignore
            value={value}
          />
          {hasError && (
            <Text style={{ color: "red" }}>{label} é obrigatório.</Text>
          )}
        </View>
      )}
      name={name}
    />
  );
}
