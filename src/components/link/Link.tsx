import { Link } from 'react-router-dom';

import { Container } from './styles';
import { LinkProps } from '@components/link/types.ts';

const LinkUnderline = ({ path, underlink, children, onClick }: LinkProps) => {
  return (
    <Container>
      <Link to={path || ''} onClick={onClick}>
        {underlink}
        {children}
      </Link>
    </Container>
  );
};

export default LinkUnderline;
