import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="mx-8 md:max-w-[900px] md:mx-auto md:px-5 flex justify-between items-center text-white mt-5 mb-10">
      <Link to="/">
        <strong className="text-2xl uppercase">Intern</strong>
      </Link>
        <div className="flex gap-4 ">
        <Link to="/about">
          <span className="bg-green-500 px-4 py-2 rounded-md max-w-[40%]">
            About
          </span>
          </Link>
          <Link to="/">
          <span className="bg-blue-500 px-4 py-2 rounded-md max-w-[40%]">
            Watch All Movies
          </span>
          </Link>
        </div>
    </div>
  );
};

export default Header;
