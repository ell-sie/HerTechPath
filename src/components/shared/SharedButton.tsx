import { Button as Btn, ButtonProps as BtnProps } from "@mui/material";
import Spinner from "../../assets/Spinner";

interface ButtonProps extends BtnProps {
  isLoading?: boolean;
}

export default function Button({ children, isLoading, ...props }: ButtonProps) {
  return (
    <Btn {...props} fullWidth>
      {children}
      {isLoading && <Spinner className="size-8" />}
    </Btn>
  );
}
