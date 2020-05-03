import React, { createContext, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
export const GithubContext = createContext();

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

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
  const [path, setPath] = useState('');

  // Search Users
  const searchUsers = async (text) => {
    setSpining(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchData}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    props.history.push("/");
    setSearchResult(res.data.items);
    setSpining(false);
  };
  //get single user data
  const userData = async (login) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${login}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
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
        spining,
        loading,
        path,setPath
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
});
