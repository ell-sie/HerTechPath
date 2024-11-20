import { TextField, TextFieldProps } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type RestrictedInputType = "text" | "number" | "color" | "email";

type InputFieldProps<TFieldValues extends FieldValues> = {
  label: string;
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  type?: RestrictedInputType;
} & TextFieldProps;

export default function InputField<TFieldValues extends FieldValues>({
  label,
  name,
  type = "text",
  control,
  ...props
}: InputFieldProps<TFieldValues>) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <TextField
            type={type}
            error={fieldState.invalid}
            {...field}
            label={label}
            value={field.value}
            helperText={fieldState.error?.message}
            {...props}
            fullWidth
          />
        )}
      />
    </>
  );
}
