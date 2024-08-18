import { Container, CustomCard, DefaultCard } from './styles';
import { CardProps } from '@components/card/types.ts';

const Card = ({ children, custom, background, onClick }: CardProps) => {
  return custom ? (
    <CustomCard background={background} onClick={onClick}>
      <Container>{children}</Container>
    </CustomCard>
  ) : (
    <DefaultCard>
      <Container>{children}</Container>
    </DefaultCard>
  );
};

export default Card;
