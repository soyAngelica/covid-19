import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFF',
      light: '#FFF',
      background: 'linear-gradient(45deg, #373B44 30%, #4286f4 90%)',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  paper: {
    margin: 'auto',
    maxWidth: 500,
    textAlign: 'center',
    color: '#FFF',
    background: 'linear-gradient(45deg, #654ea3 30%, #eaafc8 90%)'
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  spacing: 8,
  padding: '20px 0px'
});

export default theme;
