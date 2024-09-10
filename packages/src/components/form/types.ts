import { ChangeEvent } from 'react';

export interface FormProps {
  title: string;
  sub: string;
  defaultValue: string;
  disabled?: boolean;
  loading?: boolean;
  onChange?: (e: ChangeEvent) => void;
  onClick?: () => void;
}