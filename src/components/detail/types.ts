import { ReactNode } from 'react';

export interface DetailProps {
  icon: ReactNode;
  title: string;
  subheader?: string | number;
  isAction?: boolean;
  children: ReactNode;
  onClickPrev?: () => void;
  onClickAfter?: () => void;
}