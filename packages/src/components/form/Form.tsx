import { ChangeEvent } from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import CardActions from '@mui/material/CardActions';

import { Card } from '@components/card';
import { CustomInput } from '../input';
import { FormProps } from '@components/form/types.ts';


const Form = ({ title, loading, sub, defaultValue, onChange, onClick }: FormProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          {title}
        </Typography>
        <Typography sx={{ mb: 1 }} color="text.secondary">
          {sub}
        </Typography>

        <CustomInput
          label="Private Key"
          placeholder="Enter the private key"
          defaultValue={defaultValue}
          onChange={(e) => onChange && onChange(e)}
        />
        <CardActions>
          <LoadingButton
            loading={loading}
            disabled={defaultValue.length < 1}
            className="button"
            size="large"
            onClick={onClick}
          >
            Access
          </LoadingButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Form;
