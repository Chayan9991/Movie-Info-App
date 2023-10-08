import React, { useEffect, useState } from "react";
import axios from "axios";
const MovieInfo = ({ selectedMovie, apiKey, setSelectedMovie }) => {
  const [movieInfo, setMovieInfo] = useState();

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selectedMovie}&apiKey=${apiKey}`)
      .then((res) => {
        setMovieInfo(res.data);
      });
  }, [selectedMovie]);
  return (
    <div className=" flex flex-row px-3 py-3 bg-slate-700 w-fit rounded-lg">
      {movieInfo ? (
        <>
          <img
            src={movieInfo?.Poster}
            alt="poster"
            className="h-[352px] shadow-md object-cover rounded-lg"
          />
          <div className="flex flex-col ml-3 justify-center">
            <span className="font-bold bg bg-green-500 w-fit text-black text-xl  px-2 rounded-xl">
              {movieInfo?.Title}
            </span>
            <span className="mt-3 text-sm font-bold text-slate-300">
              IMDB:{" "}
              <span className="text-slate-900 font-semibold ">
                {movieInfo?.imdbRating}
              </span>{" "}
            </span>
            <span className="mt-3 text-sm font-bold text-slate-300">
              Language:{" "}
              <span className="text-slate-900 font-semibold">
                {movieInfo?.Language}
              </span>
            </span>
            <span className="mt-3 text-sm font-bold text-slate-300">
              Rated:{" "}
              <span className="text-slate-900 font-semibold">
                {movieInfo?.Rated}
              </span>
            </span>
            <span className="mt-3 text-sm font-bold text-slate-300">
              Released:{" "}
              <span className="text-slate-900 font-semibold">
                {movieInfo?.Released}
              </span>
            </span>
            <span className="mt-3 text-sm font-bold text-slate-300">
              Runtime:{" "}
              <span className="text-slate-900 font-semibold">
                {movieInfo?.Runtime}
              </span>
            </span>
            <span className="mt-3 text-sm font-bold text-slate-300">
              Genre:{" "}
              <span className="text-slate-900 font-semibold">
                {movieInfo?.Genre}
              </span>
            </span>
            <span className="mt-3 text-sm font-bold text-slate-300">
              Director:{" "}
              <span className="text-slate-900 font-semibold">
                {movieInfo?.Director}
              </span>
            </span>
            <span className="mt-3 text-sm font-bold text-slate-300">
              Actors:{" "}
              <span className="text-slate-900 font-semibold">
                {movieInfo?.Actors}
              </span>
            </span>
            <span className="mt-3 text-sm font-bold text-slate-300">
              Plot:{" "}
              <span className="text-slate-900 font-semibold">
                {movieInfo?.Plot}
              </span>
            </span>
          </div>
          <span
            className="font-bold w-fit h-fit text-black bg-red-500 px-1 rounded-md cursor-pointer"
            onClick={() => setSelectedMovie()}
          >
            X
          </span>
        </>
      ) : (
        <div className="text-center text-slate-400">Loading...</div>
      )}
    </div>
  );
};

export default MovieInfo;
