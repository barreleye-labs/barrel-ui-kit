import { createTheme as createMUITheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { joyTheme } from './tokens';

const muiSpacing = (factor: number) => {
  if (Array.isArray(spacing)) {
    return `${spacing[factor]}px`;
  }
  return `${factor * 8}px`;
};

const {
  colorSchemes: {
    light: {
      palette: { primary, neutral, background, text },
    },
  },
  typography,
  components,
  spacing,
  breakpoints,
} = joyTheme;

const muiTheme = createMUITheme({
  palette: {
    primary: {
      main: primary[600],
      light: primary[300],
      dark: primary[700],
      contrastText: '#ffffff',
    },
    secondary: {
      main: neutral[500],
      light: neutral[300],
      dark: neutral[700],
      contrastText: '#ffffff',
    },
    background: {
      default: background.body,
      paper: background.surface,
    },
    text: {
      primary: text.primary,
      secondary: text.secondary,
    },
  },
  spacing: muiSpacing,
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: breakpoints.values.xs,
      sm: breakpoints.values.sm,
      md: breakpoints.values.md,
      lg: breakpoints.values.lg,
      xl: breakpoints.values.xl,
    },
  },
  components: {
    ...components,
  },
});

export const theme = deepmerge(muiTheme, joyTheme);