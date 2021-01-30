import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Landing from "./Landing/Landing"

function App() {
    return (
        <Router>
        <Switch>
            <Route exact path="/">
                <Landing/>
            </Route>
        </Switch>
        </Router>
        
    )
}

export default App;