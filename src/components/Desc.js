import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Desc = ({ link }) => {
  const [showDesc, setShowDesc] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [bookShow, setBookShow] = useState({
    user_name: '',
    user_age: '',

  });
  const fetchData = async () => {
    const res = await axios.get(localStorage.getItem('showLink'));
    const data = await res.data;
    setShowDesc(data);
    console.log(data);
  };
  const onChange = (e) => {
    setBookShow({ ...bookShow, [e.target.name]: e.target.value });
  };
  const handleClick=()=>{
    alert(`Booked Ticket SuccessFully by ${bookShow.user_name} ${bookShow.user_age} years old!!`)
    setShowModal(!showModal)
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {Object.keys(showDesc).length !== 0 && (
        <div key={showDesc.id} className="">
          <div className="flex  max-w-[900px] mx-auto relative">
            {/* <a href={showDesc.url} target="_blank" rel="noreferrer" className=''> */}
            <img
              src={
                (showDesc.image && showDesc.image['medium']) ||
                `https://lionsgate.brightspotcdn.com/27/26/1761e2fe4faea9e2eb8ad0cbdebb/john-wick-chapter-4-movies-he-poster-02.jpg`
              }
              alt=""
              className="h-80"
            />
            <span className="absolute top-0 right-0 rounded-sm p-[0.25em] bg-red-600">
              {showDesc.language}
            </span>
            {/* </a> */}
            <div className="details px-8">
              <h1 className="text-2xl text-yellow-400 my-2">{showDesc.name}</h1>
              <h1>
                Premiered on{' '}
                <span className=" text-yellow-300">{showDesc.premiered}</span>
              </h1>
              <p className="mt-1">
                <span className="text-xl text-yellow-300">About: </span>
                {showDesc.summary && showDesc.summary.slice(3, -4)}
              </p>
              <h2 className="mt-2 mb-1">
                Ratings: {showDesc.rating.average || showDesc.score * 10 || 5}
                /10
              </h2>
              <div className="bg-black rounded-full py-[0.1px] mb-2">
                <div
                  className={`bg-yellow-400 ml-1 h-1 rounded-full my-1`}
                  style={{
                    width: `${
                      showDesc.rating.average * 10 || showDesc.score * 100 || 50
                    }%`,
                  }}
                ></div>
              </div>
              <div className="mt-4 text-red-400">
                Tags: &nbsp;
                {showDesc.genres &&
                  showDesc.genres.map((g, id) => <span key={id}>#{g} </span>)}
                <button
                  className="bg-green-500 text-black rounded-md px-4 py-2 ml-8 cursor-pointer hover:bg-green-600"
                  onClick={() => setShowModal(!showModal)}
                >
                  Book a Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {
        showModal && <div
          className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center"
        >
          <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">Update Note</p>
                <div className="modal-close cursor-pointer z-50">
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M1.5 16.5l15-15M1.5 1.5l15 15"></path>
                  </svg>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="movie_name">
                  Movie Name: {showDesc.name}
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="movie_premiered">
                  Premiered on: {showDesc.premiered}
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="movie_premiered">
                  Price : ${showDesc.weight}
                </label>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="user_name">
                  Your Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="user_name"
                  name="user_name"
                  value={bookShow.user_name}
                  onChange={onChange}
                  required
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="user_age">
                  Your Age
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="user_age"
                  name="user_age"
                  value={bookShow.user_age}
                  onChange={onChange}
                  required
                  type="text"
                />
              </div>
              

              <div className="flex justify-end pt-2">
                <button
                  className="modal-close px-4 bg-gray-800 p-3 rounded-lg text-white hover:bg-gray-700"
                  onClick={() => setShowModal(!showModal)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white cursor-pointer hover:bg-blue-400"
                  type="button"
                  onClick={handleClick}
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Desc;
