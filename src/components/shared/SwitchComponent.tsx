import { FormControl, Switch, Typography } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import Stack from "@mui/material/Stack";

interface SwitchProps<TFieldValues extends FieldValues> {
  label: string;
  name: Path<TFieldValues>;
  checked?: boolean;
  control: Control<TFieldValues>;
}

export default function SwitchComponent<TFieldValues extends FieldValues>({
  name,
  control,
  label,
}: SwitchProps<TFieldValues>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState }) => (
        <FormControl error={fieldState.invalid}>
          <Stack direction="row" alignItems="center">
            <Typography>{label}</Typography>
            <Switch
              value={value}
              onChange={onChange}
              checked={value}
              color="secondary"
            />
          </Stack>
        </FormControl>
      )}
    />
  );
}
