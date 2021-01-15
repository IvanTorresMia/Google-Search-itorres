import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './Pages/SearchBooks/search'
import Saved from './Pages/SavedBooks/saved'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/" component={Saved}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
