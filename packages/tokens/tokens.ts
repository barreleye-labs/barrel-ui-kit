import { extendTheme as createJoyTheme } from '@mui/joy/styles';
import {colorSchemes} from './color/base.json';
import {typography} from './typography/base.json';
import {breakpoints} from './breakpoints/base.json';
import {spacing} from './spacing/base.json';
import {radius} from './radius/base.json';
import {components} from './components';


const joyTheme = createJoyTheme({
  colorSchemes: { ...colorSchemes },
  typography: {...typography},
  spacing: [...spacing],
  breakpoints: {...breakpoints},
  radius: {...radius},
  components: {...components},
  cssVarPrefix: 'barrel'
});

console.log(components)

export { joyTheme };