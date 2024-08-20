import { ReactNode } from 'react';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CardHeader } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import { Container } from './styles';
import { DetailProps } from '@components/detail/types';

const Detail = ({ icon, isAction, onClickPrev, onClickAfter , children, ...props }: DetailProps) => {
  return (
    <Container>
      <Card>
        <CardHeader
          {...props}
          avatar={icon}
          action={
            isAction && (
              <>
                <IconButton aria-label="settings" onClick={onClickPrev}>
                  <KeyboardArrowLeftIcon />
                </IconButton>
                <IconButton aria-label="settings" onClick={onClickAfter}>
                  <KeyboardArrowRightIcon />
                </IconButton>
              </>
            )
          }
        />
        <Divider variant="middle" flexItem />
        <CardContent>{children}</CardContent>
      </Card>
    </Container>
  );
};

export default Detail;
