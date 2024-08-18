import { MouseEventHandler, ReactNode } from 'react';

export interface LinkProps {
  path?: string;
  underlink?: ReactNode | string | number;
  children?: ReactNode;
  onClick?: () => MouseEventHandler<HTMLAnchorElement>;
}