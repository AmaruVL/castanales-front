import { MenuItem, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

const Input = ({ control, id, label, disabled = false, placeholder, multiline = false, rows = 1, type = 'text', data = [], inputProps = null, helperText = '', valorChancado }) => {
  return (type === 'select'
    ? <Controller
      name={id}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          label={label}
          value={value}
          onChange={onChange}
          variant="outlined"
          size="small"
          select
          fullWidth
          placeholder={placeholder}
          InputProps={inputProps}
          helperText={helperText}
        >
          {data.map((elemento, index) =>
            <MenuItem key={index} value={elemento.value}>{elemento.denominacion}</MenuItem>)}
        </TextField>
      )}
    />
    : <Controller
      name={id}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          label={label}
          value={valorChancado? valorChancado : value}
          onChange={onChange}
          variant="outlined"
          size="small"
          disabled={disabled}
          multiline={multiline}
          rows={rows}
          placeholder={placeholder}
          fullWidth
          type={type}
          InputProps={inputProps}
          helperText={helperText}
        />
      )}
    />)
}

export default Input
