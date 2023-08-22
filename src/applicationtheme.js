import { createTheme } from "@material-ui/core";
const applicationTheme = createTheme({
    components: {
      MuiListItemButton: {
        defaultProps: {
          disableTouchRipple: true,
        },
      },
    },
    palette: {
      mode: 'dark',
      primary: { main: 'rgb(102, 157, 246)' },
      background: { paper: 'rgb(5, 30, 52)' },
    },
    
  })
export default applicationTheme