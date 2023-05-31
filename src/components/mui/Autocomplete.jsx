import * as React from 'react';
import { Autocomplete as AutocompleteMUI, TextField } from '@mui/material';

export const Autocomplete = ({
  data,
  propShow,
  label,
  setSelected,
  className = '',
  defaultValue = {},
}) => {
  return (
    <AutocompleteMUI
      className={className}
      disablePortal
      size="small"
      options={data}
      defaultValue={defaultValue}
      getOptionLabel={(option) => option[propShow]}
      disableClearable
      onChange={(event, value) => setSelected(value)}
      fullWidth
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
