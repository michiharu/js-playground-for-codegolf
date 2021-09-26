import red from '@mui/material/colors/red';
import createTheme from '@mui/material/styles/createTheme';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontSize: 12,
    fontFamily: ['"Courier New"', 'Monospace'].join(','),
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
});

export default theme;
