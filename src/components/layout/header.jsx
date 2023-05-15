import { Button, IconButton, Toolbar, Typography } from '@mui/material'
import ButtonChangeTheme from '../ButtonChangeTheme'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import styled from '@emotion/styled'
import MuiAppBar from '@mui/material/AppBar'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'
import { TokenContext } from '../../context/core/TokenContext'
import { useContext } from 'react'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const HeaderLayout = ({ handleDrawerOpen, open, setOpen }) => {
  const [tokenLS, setTokenLS] = useLocalStorage('token', '')
  const { modifyAxiosClient } = useContext(TokenContext)
  const navigate = useNavigate()
  const logout = () => {
    setTokenLS('')
    modifyAxiosClient(tokenLS)
    navigate('/')
  }
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' })
          }}
        >
          <MenuRoundedIcon />
        </IconButton>
        <Typography variant="h6" component="div" className='text-end mx-2' sx={{ flexGrow: 1 }}>
          Nombre de Usuario
        </Typography>
        <AccountCircleRoundedIcon fontSize='large' />
      </Toolbar>
    </AppBar>
  )
}

export default HeaderLayout
