import { CloseRounded } from '@mui/icons-material';
import { Avatar, Typography } from '@mui/material';

export const ErrorMessage = ({ msg, submsg = null, keyword = null }) => {
  return (
    <div className="flex items-center max-md:justify-center gap-4">
      <Avatar className="bg-red">
        <CloseRounded />
      </Avatar>
      <Typography className="text-base">
        {msg} <code className="font-semibold text-red">{keyword}</code>{' '}
        {submsg}
      </Typography>
    </div>
  );
};
