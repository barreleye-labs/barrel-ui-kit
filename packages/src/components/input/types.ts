import { ChangeEvent, FocusEventHandler } from 'react';

export interface InputProps {
  name?: string;
  type?: string;
  label?: string;
  defaultValue?: string | number;
  value?: string | number;
  error?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  width?: string;
  placeholder?: string;
  helperText?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () =>  FocusEventHandler< HTMLInputElement | HTMLTextAreaElement>;
}

export interface CustomInputProps {
  defaultValue?: string;
  width?: string;
  label: string;
  placeholder?: string;
  isCopyBtn?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent) => void;
}