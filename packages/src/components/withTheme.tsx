import { ComponentType } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../tokens/tokens.ts';

const withTheme = (Component: ComponentType) => (props: any) => {
  console.log(props)
  return (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  )
};

export default withTheme;