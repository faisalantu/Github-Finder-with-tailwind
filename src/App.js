import React from "react";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import Users from "./components/users/Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubContextProvider from "./context/github/GithubContext";
import UserPage from "./components/users/UserPage";

function App() {
  return (
    <Router>
      <GithubContextProvider>
        <div>
          <Navbar></Navbar>
          <div className="container mx-auto">
            <div className="md:hidden">
              <Search />
            </div>
            <Switch>
              <Route exact path="/about">
                <h1>About</h1>
              </Route>
              <Route
                exact
                path="/user/:login"
                render={(props) => {
                  return <UserPage {...props} />;
                }}
              ></Route>
              <Route exact path="/">
                <div className="container mx-auto">
                  <Users />
                </div>
              </Route>
              <Route path="*">
                <h1>404</h1>
              </Route>
            </Switch>
          </div>
        </div>
      </GithubContextProvider>
    </Router>
  );
}

export default App;
