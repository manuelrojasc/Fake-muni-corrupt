/* eslint-disable */
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom' 
import {Data} from './Components/Data'
import {Refresh} from './Components/Refresh'
import {Navbar} from './Components/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>

      <div className="container p-4">
        <Switch>
          <Route path="/refresh" component={Refresh}></Route>
          <Route path="/" component={Data}></Route>
        </Switch>
      </div> 
       
    </Router>
  );
}

export default App;
