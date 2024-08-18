import DefaultButton from '@mui/joy/Button';
import {ButtonProps} from "./types.ts";

const Button = ({ className, variant = 'outlined', color = 'neutral', size, text, startDecorator, onClick }: ButtonProps) => {
  return (
    <DefaultButton
      className={className}
      size={size}
      startDecorator={startDecorator}
      variant={variant}
      color={color}
      onClick={onClick}
    >
      {text}
    </DefaultButton>
  );
};

export default Button;
