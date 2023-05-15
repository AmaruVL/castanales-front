import { Button } from '@mui/material'
import React from 'react'
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded'

const ButtonAdd = ({ openModal }) => {
  return (
    <Button onClick={openModal} variant='contained' startIcon={<ControlPointRoundedIcon />}>
          Añadir
    </Button>
  )
}

export default ButtonAdd
