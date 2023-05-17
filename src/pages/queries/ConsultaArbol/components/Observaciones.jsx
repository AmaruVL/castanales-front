import { Typography } from '@mui/material';
import { Title } from '../../components';
import { VisibilityRounded } from '@mui/icons-material';

export const Observaciones = ({ data }) => {
  return (
    <Title value="Observaciones" Icon={VisibilityRounded}>
      <Typography>{data.observaciones}</Typography>
    </Title>
  );
};
