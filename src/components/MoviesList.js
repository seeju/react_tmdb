import React, { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";


export const MoviesList = () => {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    MoviesService.getPopularMovies()
      .then((res) => {setMovies(res.data.results)
      console.log(res)})
      .catch((err) => console.error(err));

  },[]);

  return (
    <>
      <h1>Films</h1>

      <ul>
        {!!movies && movies.map((m) => (
          <li>{m.title}</li>
        ))}
      </ul>
    </>
  );
};
