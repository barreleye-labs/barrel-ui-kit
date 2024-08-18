import { memo } from 'react';

import ATableCell from '@mui/material/TableCell';
import { TableCellProps } from '@components/table/types.ts';

const TableCell = memo(({ children, size, align, colSpan }: TableCellProps) => {
  return (
    <ATableCell colSpan={colSpan} align={align} size={size}>
      {children}
    </ATableCell>
  );
});

export default TableCell;
