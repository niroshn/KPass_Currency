import React from 'react';
import { Provider } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import createStore from './store';

const store = createStore();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: 'rgb(39,49,66)'
    },
    secondary: {
      main: 'rgb(197,208,222)'
    },
    background: {
      main: 'rgb(226,231,238)'
    }
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <Wrapper>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
          <Home />
        </Grid>
      </Wrapper>
    </Provider>
  </MuiThemeProvider>
);

export default App;
