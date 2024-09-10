import {ButtonProps} from "./types";
import CustomButton from './styles'

const Button = ({ variant = 'soft', color = 'primary', radiusType = 'slight', children, ...props }: ButtonProps) => {
  return (
    <CustomButton
      {...props}
      loadingPosition="center"
      variant={variant}
      color={color}
      radiusType={radiusType}
      sx={{ ...props.sx, "--Button-gap": "11px"}}
    >
      <span>{children}</span>
    </CustomButton>
  );
};

export default Button;
