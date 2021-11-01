import { createTheme} from '@material-ui/core/styles';
import { red, pink} from '@material-ui/core/colors';

const cherry = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: pink[100],
    },
  },
});
export {cherry};