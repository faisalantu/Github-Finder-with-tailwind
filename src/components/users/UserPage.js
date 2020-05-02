import React, { useEffect, useContext } from "react";
import { GithubContext } from "../../context/github/GithubContext";
import Skeleton from "react-loading-skeleton";

function UserPage(props) {
  const { singleUserData, userData, loading } = useContext(GithubContext);
  useEffect(function () {
    userData(props.match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    avatar_url,
    html_url,
    hireable,
    followers,
    following,
    name,
    location,
    company,
    blog,
    created_at,
  } = singleUserData;
  return (
    <>
      <div className="pt-6 flex-none md:flex">
        <div className="flex-none md:flex-1">
          <div className="flex justify-center">
            <div className='p-5 md:p-0'>
              {loading ? (
                <Skeleton height={350} width={350} />
              ) : (
                <img
                  src={avatar_url}
                  alt=""
                  className="w-full rounded overflow-hidden shadow-lg"
                  style={{height:'350px',width:'350px'}}
                />
              )}

              {loading ? (
                <Skeleton height={50} />
              ) : (
                <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 my-2 rounded">
                  <a href={html_url}>Visit Profile</a>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="flex-none md:flex-1 px-3">
          <div className="pb-5 flex justify-center md:justify-start text-center">
            {loading ? (
              <div className='pl-3 inline-block'><Skeleton height={25} width={100} /></div>
            ) : (
              <span className="flex-initial inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Hireable:{" "}
                {hireable ? (
                  <i className="fas fa-check-circle text-green-500"></i>
                ) : (
                  <i className="fas fa-times-circle text-red-500"></i>
                )}
              </span>
            )}
            {loading ? (
              <div className='pl-3 inline-block'><Skeleton height={25} width={100} /></div>
            ) : (
              <span className="flex-initial inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Following: {following}
              </span>
            )}
            {loading ? (
              <div className='pl-3 inline-block'><Skeleton height={25} width={100} /></div>
            ) : (
              <span className="flex-initial inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                Followers: {followers}
              </span>
            )}
          </div>
          {loading ? (
            <div className='my-4 px-3 d-block'><Skeleton height={70} count={4} /></div>
          ) : (
            <div className="my-4 border px-3 rounded ">
              <h1 className="py-4 text-gray-700 pl-2 text-lg font-semibold">
                <i className="fas fa-user"></i> <span>Name</span>: {name}
              </h1>
              <h1 className="py-4 text-gray-700 pl-2 border-t text-lg font-semibold">
                <i className="fas fa-globe-asia"></i> Location: {location}
              </h1>
              <h1 className="py-4 text-gray-700 pl-2 border-t text-lg font-semibold">
                <i className="fas fa-building"></i> Company: {company}
              </h1>
              <h1 className="py-4 text-gray-700 pl-2 border-t text-lg font-semibold">
                <i className="fas fa-rss-square"></i> Blog: {blog}
              </h1>
              <h1 className="py-4 text-gray-700 pl-2 border-t text-lg font-semibold">
                <i className="fas fa-calendar-day"></i> Joined GitHub: {created_at}
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserPage;
