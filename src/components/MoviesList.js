import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { MoviesService } from "../api/MoviesService";


export const MoviesList = () => {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    MoviesService.getPopularMovies()
      .then((res) => {setMovies(res.data.results)
      let teste = res.data.title})
      .catch((err) => console.error(err));

  },[]);

  return (
    <>
      <h1>Popular Films</h1>

      <ul>
        {!!movies && movies.map((m) => (
          <li>
          <Link to={`/movie/${m?.id}`}>
            {m.title}
          </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

