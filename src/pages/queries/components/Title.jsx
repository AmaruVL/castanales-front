import { Typography } from "@mui/material";

export const Title = ({value, Icon}) => {
  return (
    <div className="flex mb-2">
      <Icon color="primary" />
      <Typography color="primary" className="ml-2 font-bold">
        {value}
      </Typography>
    </div>
  );
};
