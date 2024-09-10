import { useState } from 'react';
import { Meta, ComponentStory } from '@storybook/react';
import { Button } from '../../packages/src/components/Button';
import Ripple from '../../packages/src/components/icons/Ripple';
import { Box } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RssFeedIcon from '@mui/icons-material/RssFeed';

export default {
  title: 'Organisms/Toolbar',
  component: Box,
} as Meta;

const Template: ComponentStory<typeof Box> = (args) => {
  const [walletConnected, setWalletConnected] = useState(false);

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {!walletConnected ? (
        <Button {...args} color="neutral" onClick={() => setWalletConnected(true)}>
          Connect Wallet
        </Button>
      ) : (
        <>
          <Button {...args} onClick={() => setWalletConnected(false)}startDecorator={<AutoAwesomeIcon />} color="neutral">
            Clear Private Key
          </Button>
          <Button {...args} startDecorator={<Ripple />}>
            0xbe93fb...857dc7
          </Button>
        </>
      )}
      <Button
        {...args}
        sx={{
          cursor: 'unset',
          borderColor: '#34b4a9',
          '&:hover': {
            backgroundColor: 'transparent',
            borderColor: '#34b4a9',
          },
        }}
        startDecorator={<RssFeedIcon />}
      >
        Main Network
      </Button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  radiusType: 'rounded',
  variant: 'outlined',
};