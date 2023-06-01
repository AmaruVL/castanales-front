import { Typography } from '@mui/material';
import { Title } from '@/components/custom';
import { VisibilityRounded } from '@mui/icons-material';

export const Observaciones = ({ data }) => {
  return (
    <Title value="Observaciones" Icon={VisibilityRounded}>
      <Typography>
        {data.observaciones === '' ? 'Ninguna' : data.observaciones}
      </Typography>
    </Title>
  );
};
