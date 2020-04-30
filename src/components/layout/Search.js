import React, { useContext } from "react";
import { GithubContext } from "../../context/github/GithubContext";

function Search() {
  const { searchData, setSearchData,searchUsers } = useContext(GithubContext);

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
              className=" inline-block bg-green-500 rounded-r hover:bg-green-700 text-sm text-white"
              type="submit"
              style={{
                paddingTop: "8px",
                paddingBottom: "8px",
                paddingLeft: "12px",
                paddingRight: "12px",
              }}
            >
              <i className="fas fa-search"></i>
            </button>
            
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;
