import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import AOS from 'aos';

import theme from './theme';
import Routes from './Routes';


import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import './assets/scss/index.scss';

//import 'swiper/css/swiper.min.css';
import 'swiper/swiper-bundle.css';
import 'aos/dist/aos.css';

const browserHistory = createBrowserHistory();

browserHistory.listen(location => {
  // Use setTimeout to make sure this runs after React Router's own listener
  setTimeout(() => {
    // Keep default behavior of restoring scroll position when user:
    // - clicked back button
    // - clicked on a link that programmatically calls `history.goBack()`
    // - manually changed the URL in the address bar (here we might want
    // to scroll to top, but we can't differentiate it from the others)
    if (location.action === 'POP') {
      return;
    }
    // In all other cases, scroll to top
    window.scrollTo(0, 0);
  });
});

const App = () => {
  AOS.init({
    once: true,
    delay: 50,
    duration: 500,
    easing: 'ease-in-out',
  });

  return (
    <ThemeProvider theme={theme}>
      {/* <Paper> */}
        <Router history={browserHistory}>
          <Routes />
        </Router>
      {/* </Paper> */}
    </ThemeProvider>
  );
}

export default App;