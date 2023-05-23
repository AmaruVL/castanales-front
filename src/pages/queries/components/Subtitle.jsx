import { Typography } from '@mui/material';

export const Subtitle = ({ value, content = null, children = null }) => {
  return (
    <div>
      <div className="flex my-1">
        <Typography className="font-semibold">{value}</Typography>
        <Typography className="ml-2">{content}</Typography>
      </div>
      {children && <div className="ml-5">{children}</div>}
    </div>
  );
};
