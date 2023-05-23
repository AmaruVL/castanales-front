import noDataSVG from '@/assets/images/noData.svg';
import { Typography } from '@mui/material';

export const NoDataImage = () => {
  return (
    <div className="self-center text-center flex flex-col items-center gap-3">
      <img className="max-sm:w-2/6 w-32 mt-16" src={noDataSVG} />
      <Typography className="text-[#999999] font-light ml-4">
        No hay información
      </Typography>
    </div>
  );
};
