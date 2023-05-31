import * as React from 'react';
import { Autocomplete as AutocompleteMUI, TextField } from '@mui/material';

export const Autocomplete = ({ data, propShow, label, setSelected }) => {
  return (
    <AutocompleteMUI
      disablePortal
      size="small"
      options={data}
      getOptionLabel={(option) => option[propShow]}
      onChange={(event, value) => setSelected(value)}
      fullWidth
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
