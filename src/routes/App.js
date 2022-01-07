import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;