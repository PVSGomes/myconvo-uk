import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CircularProgress, CssBaseline, ThemeProvider } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/Store';
import App from './App';
import theme from './values/theme';
import './index.css';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <PersistGate loading={<CircularProgress />} persistor={persistor}>
        <Router>
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <ScrollToTop />
            <App />
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  </CookiesProvider>,
  document.getElementById('root')
);
