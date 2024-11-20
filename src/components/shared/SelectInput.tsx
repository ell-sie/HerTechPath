import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface TimePickerProps<TFieldValues extends FieldValues> {
  label: string;
  name: Path<TFieldValues>;
  required?: boolean;
  control: Control<TFieldValues>;
  options: { id: number | string; label: string }[];
}

export default function SelectInput<TFieldValues extends FieldValues>({
  label,
  name,
  options,
  control,
  required = false,
}: TimePickerProps<TFieldValues>) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <FormControl error={fieldState.invalid} fullWidth>
            <InputLabel id={name}>{label}</InputLabel>
            <Select
              labelId={name}
              label={label}
              value={field.value}
              onChange={field.onChange}
              required={required}
            >
              <MenuItem value="">
                <em className="text-primary-200 ">None</em>
              </MenuItem>
              {options?.map((item) => (
                <MenuItem
                  key={item.id}
                  value={item?.id}
                  sx={{ borderRadius: "6px" }}
                >
                  {item?.label}
                </MenuItem>
              ))}
            </Select>
            {fieldState.invalid && (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />
    </>
  );
}
