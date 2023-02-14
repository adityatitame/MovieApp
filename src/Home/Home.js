import React, { Fragment, useState, useEffect } from "react";
import "./Home.css";
const Home = () => {
  const [movies, setMovies] = useState([]);

  const API_Url =
    "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1";
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    fetch(API_Url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <Fragment>
      <div className="container">
        {movies.map((movie) => {
          return (
            <div className="card">
              <img src={API_IMG + movie.poster_path} alt=""></img>
              <h4>{movie.title}</h4>
              <h5>Rating : {movie.vote_average}</h5>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
export default Home;
