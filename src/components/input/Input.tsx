import {memo} from 'react';

import FormHelperText from '@mui/joy/FormHelperText';
import { FormControl, TextField } from '@mui/material';

import { Container } from './styles';
import { InputProps } from '@components/input/types.ts';

const Input = memo(
  ({
    name,
    error,
    width = '80%',
    type,
    defaultValue,
    value,
    disabled,
    label,
    helperText,
    fullWidth,
    onChange,
    onBlur,
    placeholder
  }: InputProps) => {
    return (
      <Container>
        <FormControl sx={{ m: 1, width }} variant="standard">
          <TextField
            error={error}
            id="fullWidth"
            margin="normal"
            name={name}
            type={type}
            fullWidth={fullWidth}
            label={label}
            placeholder={placeholder}
            disabled={disabled}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          <FormHelperText className={error ? 'error' : 'info'}>{helperText}</FormHelperText>
        </FormControl>
      </Container>
    );
  }
);

export default Input;
