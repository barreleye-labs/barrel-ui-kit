import { MouseEventHandler, ReactNode } from 'react';

export interface TableProps {
  children?: ReactNode;
  isPagination?: boolean;
  count?: number;
  page?: number;
  onChange?: () => MouseEventHandler<HTMLAnchorElement>
}

export interface TableBodyProps {
  children: ReactNode;
}

export interface TableCellProps {
  children: ReactNode;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  colSpan?: number;
  size?: 'small' | 'medium';
}

export interface TableHeadProps {
  children: ReactNode;
}