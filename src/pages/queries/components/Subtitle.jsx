import { Typography } from '@mui/material';

export const Subtitle = ({ value, content = null, children = null }) => {
  return (
    <div>
      <div className="my-1 flex">
        <Typography className="font-semibold">{value}</Typography>
        <Typography className="ml-2">{content}</Typography>
      </div>
      {children && (
        <div className="ml-2 border-l-2 border-[#e6e6e6] pl-3">{children}</div>
      )}
    </div>
  );
};
