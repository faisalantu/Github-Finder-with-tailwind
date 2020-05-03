import React, { useContext } from "react";
import { GithubContext } from "../../context/github/GithubContext";
import Spinner from "./Spinner";

function Search() {
  const { searchData, setSearchData, searchUsers, spining } = useContext(
    GithubContext
  );

  function searchUser(e) {
    setSearchData(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    searchUsers();
  };
  return (
    <div className=" m-5 md:m-0">
      <form onSubmit={handleSubmit} className="bg-white  rounded block ">
        <div className="flex">
          <div className="flex-auto">
            <input
              className="w-full inline-block  shadow appearance-none rounded-l py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="Search"
              type="text"
              placeholder="Search"
              value={searchData}
              onChange={searchUser}
            ></input>
          </div>
          <div>
            <button
              className=" inline-block shadow bg-green-500 rounded-r hover:bg-green-700 text-sm text-white focus:outline-none"
              type="submit"
              style={{
                paddingBottom: "3px",
                paddingTop: "7px",
                paddingLeft: "9px",
                paddingRight: "9px",
              }}
            >
              {spining ? (
                <Spinner />
              ) : (
                <i
                  style={{ height: "22px", width: "21px" }}
                  className="fas fa-search"
                ></i>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;
