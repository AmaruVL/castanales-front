import * as React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

export default function ThemeContext ({ children }) {
  const [mode, setMode] = React.useState('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            // light: will be calculated from palette.primary.main,
            main: '#477961',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          }
        },
        typography: {
          fontFamily: '"Public Sans",Roboto,Arial'
        },
        shape: { 
          // Aumentar borde de botones, inputss
          borderRadius: 10,
        }, 
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
