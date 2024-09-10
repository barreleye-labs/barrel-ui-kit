import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './types';
import Ripple from '../icons/Ripple';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['soft', 'outlined', 'plain'],
      control: {
        type: 'select',
      },
    },
    color: {
      options: ['primary', 'neutral'],
      control: {
        type: 'select',
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    startDecorator: {
      control: {
        type: 'select',
      },
      options: ['None', 'Ripple'],
      mapping: {
        None: null,
        Ripple: <Ripple />,
      },
    },
    radiusType: {
      control: {
        type: 'select',
      },
      options: ['slight', 'rounded'],
    }
  },
  args: {
    color: 'primary',
    variant: 'soft',
    radiusType: 'slight',
    size: 'sm',
    loading: false,
    disabled: false,
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const VariantsTemplate: ComponentStory<typeof Button> = (args) => {
  const variants = ['soft', 'outlined', 'plain'];

  return (
    <div style={{ display: 'flex', gap: '50px'}}>
      {variants.map((variant) => (
        <div key={variant}>
          <Button {...args} variant={variant}  style={{ marginBottom: '5px',marginRight: '20px' }}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </Button>
          <Button {...args} variant={variant} disabled>
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </Button>
        </div>
      ))}
    </div>
  );
};

export const Base = Template.bind({});
Base.args = {
  variant: 'soft',
  color: 'primary',
  children: 'Primary Button',
  startDecorator: null,
};

export const Variants = VariantsTemplate.bind({});
Variants.args = {
  color: 'primary',
};

export const With_Icons = Template.bind({});
With_Icons.args = {
  variant: 'outlined',
  color: 'primary',
  startDecorator: <Ripple />,
  children: 'Icon Button',
  loading: false,
  radiusType: 'rounded'
};
