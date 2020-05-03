import React from "react";
import { Link } from "react-router-dom";

function User(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={props.user.avatar_url} alt="" className="w-full" />
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-blue-700 text-xl mb-2">
          {props.user.login}
        </div>
        <div>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">
            <Link to={`/user/${props.user.login}`}> View More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
