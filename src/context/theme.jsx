import { ThemeProvider, createTheme } from '@mui/material';

export const ThemeContext = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#477961',
      },
    },
    typography: {
      fontFamily: '"Public Sans",Roboto,Arial',
    },
    shape: {
      borderRadius: 10,
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
