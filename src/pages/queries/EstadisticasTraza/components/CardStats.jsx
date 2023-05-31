import { Paper, Typography } from '@mui/material';

export const CardStats = ({ value, text, Icon }) => {
  return (
    <>
      <Paper
        className="flex h-32 w-full max-w-[400px] items-center justify-evenly place-self-center drop-shadow-lg
        hover:drop-shadow-xl"
        elevation={0}
      >
        <div className="flex flex-col items-center gap-1">
          <Typography className="text-4xl font-bold text-dark-gray">
            {value}
          </Typography>
          <Typography className="max-w-[200px] text-center text-light-gray">
            {text}
          </Typography>
        </div>
        <Icon className="text-5xl" color="primary" />
      </Paper>
    </>
  );
};
