import React from "react";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import Users from "./components/users/Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubContextProvider from "./context/github/GithubContext";

function App() {
  return (
    <GithubContextProvider>
      <div>
        <Router>
          <Navbar></Navbar>
          <div className="container mx-auto">
            <div className="md:hidden">
              <Search />
            </div>
          </div>
          <Switch>
            <Route exact path="/about">
              <h1>About</h1>
            </Route>
            <Route exact path="/">
              <div className="container mx-auto">
                <Users />
              </div>
            </Route>
            <Route path="*">
              <h1>404</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </GithubContextProvider>
  );
}

export default App;
