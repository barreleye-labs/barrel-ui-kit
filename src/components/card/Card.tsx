import { Container, CustomCard, DefaultCard } from './styles';
import { CardProps } from '@components/card/types.ts';

const Card = ({ children, custom, background, onClick, ...props }: CardProps) => {
  return custom ? (
    <CustomCard {...props} background={background} onClick={onClick}>
      <Container>{children}</Container>
    </CustomCard>
  ) : (
    <DefaultCard {...props}>
      <Container>{children}</Container>
    </DefaultCard>
  );
};

export default Card;
