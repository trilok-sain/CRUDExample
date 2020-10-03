import React from 'react';
import ViewComponent from './ViewComponent';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors'
import { Typography } from '@material-ui/core';
const theme = createMuiTheme({
  palette:{
    primary:green,
    secondary: blue
  },
  typography:{
    fontSize: 20
  }
})

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <ViewComponent/>
    </ThemeProvider>
  );
} 
export default App;