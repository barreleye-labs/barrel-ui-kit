import { ReactNode } from 'react';

export interface RowProps {
  label: string;
  content?: string | number;
  children?: ReactNode;
}
