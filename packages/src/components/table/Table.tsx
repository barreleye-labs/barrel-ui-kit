import Pagination from '@mui/material/Pagination';

import { Container, TableContainer, TableWrapper } from './styles';
import { TableProps } from '@components/table/types.ts';

const Table = ({ isPagination = true, count, page, children, onChange }: TableProps) => {
  return (
    <Container>
      <TableContainer>
        <TableWrapper>{children}</TableWrapper>
      </TableContainer>
      {isPagination ? <Pagination count={count} page={page} shape="rounded" onChange={onChange} /> : ''}
    </Container>
  );
};

export default Table;
