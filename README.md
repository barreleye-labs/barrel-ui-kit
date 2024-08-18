# Barrel UI Kit

**Barrel UI Kit** is a reusable, customizable, and easy-to-use UI component library designed for building modern web applications with React. This library provides a set of UI components that can be used out of the box or customized to fit the specific needs of your project.

## Integration with BarrelEye Projects

**Barrel UI Kit** is primarily used in the [BarrelEye](https://github.com/barreleye-labs) projects, particularly in the [BarrelEye Scan](https://github.com/barreleye-labs/barreleyescan) application. You can explore this project online at the [BarrelEye Scan Website](https://barreleyescan.com/).

By using **Barrel UI Kit**, you can maintain consistent UI elements and design patterns across your applications, ensuring a unified user experience in all your BarrelEye-related projects.

## Installation

You can install Barrel UI Kit via `npm` or `pnpm`:

### pnpm

```bash
pnpm add barrel-ui-kit
```

## Usage
To use a component from Barrel UI Kit, you simply import the component and include it in your React component.

### Example
```tsx
import React from 'react';
import { Button } from 'barrel-ui-kit';

const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Button variant="primary">Click Me</Button>
    </div>
  );
};

export default App;
```

## Components

### Button

```tsx
import { Button } from 'barrel-ui-kit';

<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="danger">Danger Button</Button>
```

### Input
```tsx
import { Input } from 'barrel-ui-kit';

<Input placeholder="Enter text here" />
```

## Customization
Barrel UI Kit is designed to be easily customizable. You can override the default styles by passing your own styles or by using CSS-in-JS solutions like styled-components.
```tsx
import styled from 'styled-components';
import { Button } from 'barrel-ui-kit';

const CustomButton = styled(Button)`
  background-color: #ff5733;
  color: white;
`;

<CustomButton>Custom Button</CustomButton>;
```
