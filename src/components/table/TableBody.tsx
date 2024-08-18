import { Body } from './styles.tsx';
import { TableBodyProps } from '@components/table/types.ts';

const TableBody = ({ children }: TableBodyProps) => {
  return <Body>{children}</Body>;
};

export default TableBody;
