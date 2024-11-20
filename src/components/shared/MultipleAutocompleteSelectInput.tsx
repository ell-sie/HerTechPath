import { Autocomplete, TextField } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

export interface MultipleAutocompleteSelectInputProps<
  TFieldValues extends FieldValues
> {
  label: string;
  name: Path<TFieldValues>;
  required?: boolean;
  control: Control<TFieldValues>;
  options: { value: number | string; label: string }[];
}

export default function MultipleAutocompleteSelectInput<
  TFieldValues extends FieldValues
>({
  label,
  name,
  options,
  control,
}: MultipleAutocompleteSelectInputProps<TFieldValues>) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { ref, onChange, ...field } }) => (
          <Autocomplete
            options={options}
            isOptionEqualToValue={(option, item) => item.value === option.value}
            onChange={(_, data) => onChange(data)}
            defaultValue={[]}
            value={Array.isArray(field.value) ? field.value : []}
            disablePortal
            multiple
            renderInput={(params) => (
              <TextField inputRef={ref} {...params} label={label} />
            )}
          />
        )}
      />
    </>
  );
}
