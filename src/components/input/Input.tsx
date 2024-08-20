import {memo} from 'react';

import FormHelperText from '@mui/joy/FormHelperText';
import { FormControl, TextField } from '@mui/material';

import { Container } from './styles';
import { InputProps } from '@components/input/types.ts';

const Input = memo(
  ({
     error,
     helperText,
     width = '80%',
    ...props
  }: InputProps) => {
    return (
      <Container>
        <FormControl sx={{ m: 1, width }} variant="standard">
          <TextField
            id="fullWidth"
            margin="normal"
            {...props}
          />
          <FormHelperText className={error ? 'error' : 'info'}>{helperText}</FormHelperText>
        </FormControl>
      </Container>
    );
  }
);

export default Input;
