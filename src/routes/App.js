import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Blog from '../containers/Blog';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import ContentBlog from '../components/ContentBlog';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog-content" component={ContentBlog}/>
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;