import React from 'react'
import Login from './component/Login'
import Register from './component/Register'
import Dashboard from './component/auth/Dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProtectedRoutes from './ProtectedRoutes';

  function App(props){
    
  return (
    <>
      
      <Router>
        <Switch>
            <Route exact path="/Register" component={Register}/>
            <Route exact path="/" component={Login}/>
        </Switch>
          <Route exact path="/Dashboard" component={Dashboard} props={props.status} /> 
      </Router>
     
    </>
  );
}

export default App;
