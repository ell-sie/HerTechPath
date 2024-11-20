import { Autocomplete, TextField } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";
import { MultipleAutocompleteSelectInputProps } from "./MultipleAutocompleteSelectInput";

export default function AutoCompleteTextInput<
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
        render={({ field: { onChange, value, ref }, fieldState }) => (
          <Autocomplete
            options={options}
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, item) => option.value === item.value}
            onChange={(_, data) => onChange(data?.value || "")}
            value={options.find((option) => option.value === value) || null}
            renderInput={(params) => (
              <TextField
                inputRef={ref}
                {...params}
                label={label}
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
              />
            )}
          />
        )}
      />
    </>
  );
}
