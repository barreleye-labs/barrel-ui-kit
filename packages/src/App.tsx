import { Button } from './components/button';
import { theme } from '../tokens/muiTheme';
import { OpenInNew } from '@mui/icons-material';
import Ripple from './components/icons/Ripple.tsx';

function App() {
  console.log(theme)
  return (
    <>
      <Button>primary</Button>
      <br /><br />
      <Button variant="outlined">secondary</Button>
      <br /><br />
      <Button variant="outlined" color="success" startDecorator={<Ripple />}><span
        className="MuiChip-label MuiChip-labelMedium css-1jzq0dw-MuiChip-label">Main Network</span></Button>
    </>
  )
}

export default App
