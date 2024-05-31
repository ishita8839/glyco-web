import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const user = false;
  return (
    <div className="flex justify-between px-10 py-3 bg-gray-200 shadow-lg">
      <div className="text-xl font-semibold items-center flex">
        <Link to="/">Glyco AI</Link>
      </div>

      <div>
        {user ? (
          <div className="flex gap-5">
            <img
              className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer"
              src="https://github.com/shadcn.png"
              alt="Bordered avatar"
            />
            <button className="bg-red-500 text-white px-3 rounded-lg">
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button className="mr-4">
              <Link to="/login" className="">
                Login
              </Link>
            </button>
            <button className="bg-green-600 px-3 py-1 rounded-md text-white">
                <Link to="/signup" className="">
                    Sign Up
                </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;