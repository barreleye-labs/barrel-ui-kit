import Grid from '@mui/material/Grid';
import { Container } from './styles';
import { RowProps } from '@components/row/types.ts';

const Row = ({label, content, children}: RowProps) => {
  return (
    <Container>
      <Grid container spacing={{ xs: 0.5, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
        <Grid item className="label" xs={4} sm={4} md={4}>
          {label}
        </Grid>
        <Grid item className="content" xs={4} sm={8} md={8}>
          {content}
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Row;
