import React, { useContext } from "react";
import User from "./User";
import { GithubContext } from "../../context/github/GithubContext";

function Users() {
  const { searchResult } = useContext(GithubContext);
  return (
    <div className=" m-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {searchResult.map((data) => {
        return <User key={data.id} user={data} />;
      })}
    </div>
  );
}

export default Users;
