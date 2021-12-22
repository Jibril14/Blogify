import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './hocs/Layout';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Category from './components/Category';
import Contact from './components/Contact';
const  App =()=> {
  return(
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Blog}/>
          <Route exact path='/blog' component={Blog}/>
          <Route exact path='/category/:id'  component={Category}/>
          <Route exact path='/blog/:id'  component={BlogDetail}/>
          <Route exact path='/contact'  component={Contact}/>
        </Switch>
      </Layout>
   </Router>
  );
}
 
  
export default App;
