import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  background?: string;
  custom?: boolean;
  pointer?: boolean;
  onClick?: () => void;
}