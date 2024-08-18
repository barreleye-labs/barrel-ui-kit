import { Logo } from './styles';
import { LogoProps } from './types';

const BarreleyeLogo = ({onClick}: LogoProps) => {
  return (
    <Logo onClick={onClick}>
      <span className="bold">
        Barreleye
      </span>
      &nbsp;
      <span>scan</span>
    </Logo>
  );
};

export default BarreleyeLogo;
