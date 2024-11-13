import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface MultilineTextFieldsProps {
    label: string;
    placeholder: string;
}

export default function MultilineTextFields({ label, placeholder }: MultilineTextFieldsProps) {
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { width: "65ch" } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-textarea"
          label={label}
          placeholder={placeholder}
          multiline
        />
      </div>
    </Box>
  );
}
