
const MovieComponent = (props) => {
    const {Title, Year, imdbID, Type, Poster} = props.movie; 
return (
    <div className="bg-slate-600 flex flex-col p-[10px] cursor-pointer w-[280px] shadow-md rounded-lg" onClick={()=>{props.setSelectedMovie(imdbID)}}>
      <img
        src={Poster}
        alt=""
        className="h-[362px] shadow-md object-cover"
      />
      <span className="whitespace-nowrap shadow-md text-ellipsis overflow-hidden font-bold mt-2 text-xl text-black bg-green-500 rounded-lg px-1 w-auto" >{Title}</span>
      <div className="flex flex-row justify-between">
           <span className="font-bold shadow-md font-mono text-white bg-blue-500 w-fit px-2 rounded-lg mt-1">{Year}</span>
           <span className="font-bold shadow-md font-mono text-white bg-red-500 w-fit px-2 rounded-lg mt-1">{Type}</span>
      </div>
    </div>
  );
};

export default MovieComponent;
