import { styled } from '@mui/material/styles';
import Button from '@mui/joy/Button';

const CustomButton = styled(Button)(({ theme, variant, color, radiusType }: { theme: any, variant: string, disabled: boolean }) => {
  const softVariants = {
    color: color === 'primary' && theme.components.JoyButton.color.soft.text.primary,
    backgroundColor: color === 'primary' && theme.components.JoyButton.color.soft.background.primary,

    '&:hover, &:active': {
      color: theme.components.JoyButton.color.soft.text.primary,
      backgroundColor: theme.components.JoyButton.color.soft.background.hover,
    },

    '&.Mui-disabled': {
      color: theme.components.JoyButton.color.soft.text.disabled,
      backgroundColor: theme.components.JoyButton.color.soft.background.disabled,
    },
  };

  const outlinedVariants = {
    color: color === 'primary' ? theme.components.JoyButton.color.outlined.text.primary : theme.components.JoyButton.color.outlined.text.neutral,
    backgroundColor: theme.components.JoyButton.color.outlined.background.neutral,
    borderColor: color === 'primary' ? theme.components.JoyButton.color.outlined.border.primary : theme.components.JoyButton.color.outlined.border.neutral,

    '&:hover, &:active': {
      color: theme.components.JoyButton.color.outlined.text.hover,
      backgroundColor: theme.components.JoyButton.color.outlined.background.hover,
      borderColor: theme.components.JoyButton.color.outlined.border.hover,

      'svg': {
        color: theme.components.JoyButton.color.outlined.border.hover,
      }
    },

    '&.Mui-disabled': {
      color: theme.components.JoyButton.color.outlined.text.disabled,
      borderColor: theme.components.JoyButton.color.outlined.border.disabled,
    },
  };

  const plainVarinats = {
    '&:hover, &:active': {
      color: theme.components.JoyButton.color.plain.text.hover,
      backgroundColor: theme.components.JoyButton.color.plain.background.hover,
    },
  };

  const slightStyles= {
    borderRadius: theme.components.JoyButton.border.slight,
  }

  const roundedStyles= {
    borderRadius: theme.components.JoyButton.border.rounded,
  }

  return {
    padding: theme.spacing(1, 5),
    ...(variant === 'soft' && softVariants),
    ...(variant === 'outlined' && outlinedVariants),
    ...(variant === 'plain' && plainVarinats),
    ...(radiusType === 'slight' && slightStyles),
    ...(radiusType === 'rounded' && roundedStyles),

    'svg': {
      fontSize: '14px',
    },
  };
});

export default CustomButton;