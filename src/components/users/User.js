import React from "react";

function User(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={props.user.avatar_url} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          {props.user.login}
        </div>
      </div>

    </div>
  );
}

export default User;
