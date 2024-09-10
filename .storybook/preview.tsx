import { ThemeProvider } from '@mui/material/styles';
import { CssVarsProvider } from '@mui/joy/styles';
import { theme } from '../packages/tokens/muiTheme';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CssVarsProvider theme={theme}>
        <Story />
      </CssVarsProvider>
    </ThemeProvider>
  ),
];

export default preview;