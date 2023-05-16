import { Typography } from "@mui/material";

export const Subtitle = ({value, content = null}) => {
  return (
    <div className="flex m-1">
      <Typography className="font-bold">{value}</Typography>
      <Typography className="ml-2">{content}</Typography>
    </div>
  );
};
