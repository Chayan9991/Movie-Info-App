import Header from "./components/Header";
import MovieComponent from "./components/MovieComponent";
import React, { useState } from "react";
import axios from "axios";
import MovieInfo from "./components/MovieInfo";
const API_KEY = "a9118a3a";//cea7db4a alternate key

function App() {
  const [searchQuery, setSearchQuery] = useState();
  const [timeoutId, setTimeoutId] = useState();
  const[movieList, setMovieList] = useState(); 
  const[selectedMovie, setSelectedMovie] = useState(); 


  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    setMovieList(response.data.Search); 
    setSelectedMovie(); 
  };

  const search = (e) => {
    clearTimeout(timeoutId);
    setSearchQuery(e.target.value);
    const timeout = setTimeout(() => {
      fetchData(e.target.value);
    }, 500);
    setTimeoutId(timeout);
  };
  return (
    <div className="min-h-screen min-w-screen  bg-slate-800">
      <Header search={search} searchValue={searchQuery} />
      {selectedMovie && <MovieInfo selectedMovie={selectedMovie} apiKey={API_KEY} setSelectedMovie={setSelectedMovie}/>}
      <div className="mt-5">
        <div className="flex flex-row justify-around gap-2 flex-wrap">
          {movieList?.length? movieList.map((movie, index)=><MovieComponent key={index} movie={movie} setSelectedMovie={setSelectedMovie}/>): "No Movies Found"}; 
          
        </div>
      </div>
    </div>
  );
}

export default App;
