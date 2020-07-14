// index.js
// source: https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
// Merged with existing index.js from create-react-app
//
// Lessons learned - 1) changed Main to {Main} in 3rd import to eliminate
// "Attempted import error: 'Main' is not exported from './Main.js'."
// per https://dev.to/laurieontech/exports-and-imports-and-defaults-oh-my-fa3
//
// 2) Now generates "Attempted import error: 'Main' is not exported from './Main.js'." error.
//  Fixed via https://stackoverflow.com/questions/56868946/attempted-import-error-app-is-not-exported-from-app/56868991
//  (i.e., replaced "import {Main} from "./Main.js";" back to:
//  "import Main from "./Main.js";" to make the emport of Main a default export)
//






import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main.js";

ReactDOM.render(
  <Main/>,
  document.getElementById("root")
);
