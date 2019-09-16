import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const ExampleTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2EC0CC',
    },
    secondary: {
      main: '#434444',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  direction: 'ltr',
});

export default ExampleTheme;