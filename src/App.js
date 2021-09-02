import React from 'react'
import Login from './component/Login'
import Register from './component/Register'
import Dashboard from './component/auth/Dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      
      <Router>
        <Switch>
            <Route exact path="/Register"><Register/></Route>
            <Route exact path="/"><Login/></Route>
            <Route exact path="/Protected/Dashboard"><Dashboard/></Route>
            
        </Switch>
      </Router>
     
    </>
  );
}

export default App;
