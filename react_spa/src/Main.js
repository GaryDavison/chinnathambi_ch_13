// Main.js
// Source: https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
//
//  added "export default" to class defn to eliminate
// "Attempted import error: 'Main' is not exported from './Main.js'."
// per https://dev.to/laurieontech/exports-and-imports-and-defaults-oh-my-fa3
//  See also https://stackoverflow.com/questions/56868946/attempted-import-error-app-is-not-exported-from-app/56868991
//
//  Removed "export default" because I realized that I overlooked the
//  "export default Main;" line at the bottom.  Added it, and problems went away.
//


//Added imports here
// Added import "./index.css";
//


import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import "./index.css";


// Added calls to HashRouter
//
// Replaced links with NavLinks
//
// Added routes
//
// Added exact attribute to Home route
//

//  Added exact attribute to Home NavLinks
//

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main;
