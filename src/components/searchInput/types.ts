import { ChangeEvent } from 'react';

export interface SearchInputProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}