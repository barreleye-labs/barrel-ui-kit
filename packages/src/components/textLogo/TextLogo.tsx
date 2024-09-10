import { LogoContainer } from './styles';
import { LogoProps } from './types';

export const TextLogo = ({bold, semi, onClick}: LogoProps) => {
  return (
    <LogoContainer onClick={onClick}>
      <span className="bold">
        {bold}
      </span>
      &nbsp;
      <span>{semi}</span>
    </LogoContainer>
  );
};

