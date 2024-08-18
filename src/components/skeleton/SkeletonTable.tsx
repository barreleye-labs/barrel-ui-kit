import Skeleton from '@mui/material/Skeleton';
import TableRow from '@mui/material/TableRow';

import { TableCell } from '../table';
import { SkeletonTableProps } from '@components/skeleton/types.ts';


const SkeletonTable = ({ columns = 7, size = 10 }: SkeletonTableProps) => {
  return new Array(size).fill({}).map((_, index) => (
    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      {new Array(columns).fill({}).map((_, idx) => (
        <TableCell key={idx}>
          <Skeleton variant="rectangular" />
        </TableCell>
      ))}
    </TableRow>
  ));
};

export default SkeletonTable;
