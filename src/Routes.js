import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';



const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={App}/>
      <Route path="chatList/:userName" component={Chatter}/>


    </Route>

  </Router>
)

export default Routes;
