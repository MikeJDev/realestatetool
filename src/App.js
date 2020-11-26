import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import MenuContainer from './components/Menu/index'
import Rooms from './components/Rooms/index'

export default function App() {


  return (
    <div>
      <Router>
        <div>
          {/* <Link to="/">Home</Link> */}
          {/* <Link to="/rooms">Rooms</Link> */}
          <Switch>
            <Route path="/rooms">
              <Rooms />
            </Route>
            <Route exact path="/">
              <MenuContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}
