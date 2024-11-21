import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Divider } from "@mui/material";
import { blackColor } from "../constants/constantVariables";

interface SearchInputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeHolder?: string;
  backgroundColor?: string;
}

export default function SearchInput({
  onChange,
  placeHolder = "",
  backgroundColor = blackColor,
  ...props
}: SearchInputProps) {
  return (
    <Paper
      component="form"
      {...props}
      sx={{
        p: "4px 4px",
        display: "flex",
        alignItems: "center",
        width: 500,
        backgroundColor,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeHolder}
        inputProps={{ "aria-label": placeHolder }}
        onChange={onChange}
      />
      <IconButton
        type="button"
        sx={{ p: "10px", color: "#001342" }}
        aria-label="search"
      >
        <SearchIcon className="size-8" />
      </IconButton>
      <Divider
        sx={{ height: 28, m: 0.5, color: "#001342" }}
        orientation="vertical"
      />
    </Paper>
  );
}
