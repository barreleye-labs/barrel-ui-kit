import DefaultButton from '@mui/joy/Button';
import {ButtonProps} from "./types.ts";

const Button = ({ variant = 'outlined', color = 'neutral', children, text, ...props }: ButtonProps) => {
  return (
    <DefaultButton {...props} variant={variant} color={color}>
      {text}
      {children}
    </DefaultButton>
  );
};

export default Button;
