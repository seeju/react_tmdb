import React, { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";


export const MovieDetails = (props) => {
   const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    MoviesService.getMovieById(props?.match?.params?.id)
      .then((res) => {setMovie(res.data)
      console.log(res)})
      .catch((err) => console.error(err));

  },[]);


  return (
    <>
    <h3>{!!movie && movie.title}</h3>
    <h5>{!!movie && movie.original_title}</h5>
    <p>{!!movie && movie.overview}</p>
    </>
  )
};

