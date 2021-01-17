import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './Pages/SearchBooks/search'
import Saved from './Pages/SavedBooks/saved'
import Nav from './Components/Nav'
import Hero from './Components/Hero'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Hero />
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/saved" component={Saved}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
