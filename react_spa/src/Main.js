// Main.js
// Source: https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
//
//  added "export default" to class defn to eliminate
// "Attempted import error: 'Main' is not exported from './Main.js'."
// per https://dev.to/laurieontech/exports-and-imports-and-defaults-oh-my-fa3
//  See also https://stackoverflow.com/questions/56868946/attempted-import-error-app-is-not-exported-from-app/56868991
//

import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="content">

          </div>
        </div>
    );
  }
}
