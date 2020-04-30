import React, { createContext, useState } from "react";
import axios from "axios";
export const GithubContext = createContext();

export default function GithubContextProvider(props) {
  const [searchData, setSearchData] = useState("");
  const [searchResult, setSearchResult] = useState([{login:"faisalantu",avatar_url:"https://avatars0.githubusercontent.com/u/26870205?v=4",id:5}]);

  // Search Users
  const searchUsers = async (text) => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchData}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data.items)
    setSearchResult(res.data.items);
  };
  return (
    <GithubContext.Provider
      value={{ searchData, setSearchData, searchUsers, searchResult }}
    >
      {props.children}
    </GithubContext.Provider>
  );
}
