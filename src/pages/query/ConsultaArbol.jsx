import { Box, Typography } from "@mui/material"
import waveup from '../../assets/waves/wave-up.svg'
import ParkIcon from '@mui/icons-material/Park';

export const ConsultaArbol = () => {
  return (
    <>
      <Box>
        <img src={waveup}></img>
      </Box>
      <Box>
        <ParkIcon color="primary"/>
        <Typography>
          Consulta Árbol
        </Typography>
      </Box>
    </>
  )
}
