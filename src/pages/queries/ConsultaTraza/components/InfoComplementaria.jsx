import { Title, Subtitle } from '@/components/custom';
import { AddCircleRounded } from '@mui/icons-material';

export const InfoComplementaria = ({ data }) => {
  return (
    <Title value="Información complementaria" Icon={AddCircleRounded}>
      <section className="grid md:grid-cols-2">
        <Subtitle value="Campamento:" content={data.campamento} />
        <Subtitle value="Baño:" content={data.banho} />
        <Subtitle value="Realiza quemas:" content={data.realiza_quemas} />
        <Subtitle
          value="Combustible para transporte:"
          content={data.combustible_para_transporte}
        />
      </section>
    </Title>
  );
};
