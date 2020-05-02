import React from "react";

const About = () => {
  return (
    <div className="flex justify-center self-center h-full w-full mt-8">
      <div className="flex text-gray-700 border-l-8 border-red-500 border-solid subpixel-antialiased shadow rounded overflow-hidden mt-6">
        <div className="flex-1 p-6">
          <p className=" text-lg font-bold">Search GitHub users</p>
          <h1 className="text-lg font-semibold">DEV: Faisal Ahmed (Antu)</h1>
          <p className="text-sm">Version: 1.0.0</p>
        </div>
        <div className="flex-2 bg-gray-400">
          <div className="flex flex-col justify-between">
            <a
              className="p-3 bg-gray-600"
              rel="noopener noreferrer"
              href="http://www.facebook.com/antufa"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="p-3 bg-gray-600"
              rel="noopener noreferrer"
              href="https://twitter.com/fa_antu"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="p-3 bg-gray-600"
              rel="noopener noreferrer"
              href="http://github.com/faisalantu"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
