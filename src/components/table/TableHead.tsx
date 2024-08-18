import { Head } from './styles.tsx';
import { TableHeadProps } from '@components/table/types.ts';


const TableHead = ({ children }: TableHeadProps) => {
  return <Head>{children}</Head>;
};

export default TableHead;
