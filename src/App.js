import React from 'react'
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
            <Route exact path="/Register"><Register/></Route>
            <Route exact path="/"><Login/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
