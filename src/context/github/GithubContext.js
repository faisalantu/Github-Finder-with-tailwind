import React, { createContext, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
export const GithubContext = createContext();

export default withRouter(function GithubContextProvider(props) {
  const [searchData, setSearchData] = useState("");
  const [searchResult, setSearchResult] = useState([
    {
      login: "faisalantu",
      avatar_url: "https://avatars0.githubusercontent.com/u/26870205?v=4",
      id: 5,
    },
  ]);
  const [singleUserData, setSingleUserData] = useState([]);
  const [spining, setSpining] = useState(false);
  const [loading, setLoading] = useState(false);

  // Search Users
  const searchUsers = async (text) => {
    setSpining(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchData}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    props.history.push("/");
    setSearchResult(res.data.items);
    setSpining(false);
  };
  //get single user data
  const userData = async (login) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setSingleUserData(res.data);
    setLoading(false);
  };
  return (
    <GithubContext.Provider
      value={{
        searchData,
        setSearchData,
        searchUsers,
        searchResult,
        singleUserData,
        setSingleUserData,
        userData,
        spining
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
});
