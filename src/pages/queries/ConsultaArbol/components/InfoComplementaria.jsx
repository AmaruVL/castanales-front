import { Title, Subtitle } from '../../components';
import { AddCircleRounded } from '@mui/icons-material';

export const InfoComplementaria = ({ data }) => {
  return (
    <Title value="Información complementaria" Icon={AddCircleRounded}>
      <Subtitle value="Campamento:" content={data.campamento} />
      <Subtitle value="Baño:" content={data.banho} />
      <Subtitle value="Realiza quemas:" content={data.realiza_quemas} />
      <Subtitle
        value="Combustible para transporte:"
        content={data.combustible_para_transporte}
      />
    </Title>
  );
};
