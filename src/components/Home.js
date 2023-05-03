import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = ({ setLink }) => {
  const [shows, setShows] = useState([]);
  const fetchData = async () => {
    const res = await axios.get('https://api.tvmaze.com/search/shows?q=all');
    // console.log(res);
    const data = await res.data;
    setShows(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 max-w-[900px] mx-auto ">
      {shows.map((s) => {
        return (
          <div key={s.show.id} className="my-4 mx-auto relative">
            <a href={s.show.url} target="_blank" rel="noreferrer">
              <img
                src={
                  (s.show.image && s.show.image['medium']) ||
                  `https://lionsgate.brightspotcdn.com/27/26/1761e2fe4faea9e2eb8ad0cbdebb/john-wick-chapter-4-movies-he-poster-02.jpg`
                }
                className="h-80"
                alt="img"
              />
            </a>
            <span className="absolute top-0 right-0 rounded-sm p-[0.25em] bg-red-600">
              {s.show.language}
            </span>
            <div className="bg-black rounded-full py-[0.1px]">
              <div
                className={`bg-yellow-400  h-1 rounded-full my-1`}
                style={{
                  width: `${s.show.rating.average * 10 || s.score * 100}%`,
                }}
              ></div>
            </div>
            <div className='info flex justify-between items-center gap-2 mt-2'>
            <h3 className='text-xl '>{s.show.name}</h3>
            <Link to="/desc">
              <button
                className="bg-green-500 text-black rounded-md px-4 py-2  cursor-pointer hover:bg-green-600"
                onClick={() => {
                  setLink(s.show._links.self.href);
                }}
              >
                Read More
              </button>
            </Link></div>
            <h1 className='mt-2 '>Tags: &nbsp; 
              {s.show.genres.map((g, id) => (
                <span key={id}>#{g} </span>
              ))}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
