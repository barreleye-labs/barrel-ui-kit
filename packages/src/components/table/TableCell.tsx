import { memo } from 'react';

import ATableCell from '@mui/material/TableCell';
import { TableCellProps } from '@components/table/types.ts';

const TableCell = memo(({ children, ...props}: TableCellProps) => {
  return (
    <ATableCell {...props}>
      {children}
    </ATableCell>
  );
});

export default TableCell;
