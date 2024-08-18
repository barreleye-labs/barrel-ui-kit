import { ReactNode } from 'react';
import { IconButtonProps } from '@mui/material/IconButton';

export interface CardProps {
  children: ReactNode;
  background?: string;
  custom?: boolean;
  pointer?: boolean;
  onClick?: () => void;
}

export interface NodeConfig {
  [key: string]: string;
}

export interface AvatarCardProps {
  src: string;
  address: string;
  nonce: string;
  balance: string;
  title: string;
  config: NodeConfig
}

export interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}