import React from 'react';
import Nav from './components/nav/Nav';
import GlobalStyles from './styles/globalStyles';
import { Switch, Route } from 'react-router-dom';
import { Page, Inner } from './AppStyles';
import Index from './pages/Index';
import { routes } from './config';
import Details from './pages/Details';

const App = () => (
  <Page>
    <GlobalStyles />
    <Nav />
    <Inner>
      <Switch>
        <Route exact path={routes.ROOT} component={Index} />
        <Route exact path={routes.DETAILS} component={Details} />
        <Route component={Index} />
      </Switch>
    </Inner>
  </Page>
);

export default App;
