import { memo, useState } from 'react';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import Button from '@mui/material-next/Button';

import { Container } from './styles';
import { CustomInputProps } from '@components/input/types.ts';

const COPY_TEXT = {
  DEFAULT: 'COPY',
  ACTIVE: 'COPIED!'
};

const CustomInput = memo(
  ({ width = '50%', defaultValue, label, isCopyBtn, disabled, placeholder, onChange, ...props }: CustomInputProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [copyButtonText, setCopyButtonText] = useState(COPY_TEXT.DEFAULT);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const onCopy = () => {
      setCopyButtonText(COPY_TEXT.ACTIVE);
      navigator.clipboard?.writeText(defaultValue as string);

      setTimeout(() => {
        setCopyButtonText(COPY_TEXT.DEFAULT);
      }, 1000);
    };

    return (
      <Container>
        <FormControl sx={{ m: 1, width }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
          <Input
            {...props}
            value={defaultValue}
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        {isCopyBtn && (
          <Button onClick={onCopy} className={`${'copy-button'} ${copyButtonText === COPY_TEXT.ACTIVE && 'active'} `}>
            {copyButtonText}
          </Button>
        )}
      </Container>
    );
  }
);

export default CustomInput;
