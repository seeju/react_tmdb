import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesService } from "../api/MoviesService";


export const MovieDetails = (props) => {
   const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    MoviesService.getMovieById(props?.match?.params?.id)
      .then((res) => {setMovie(res.data.results)})
      .catch((err) => console.error(err));

  },[]);


  return (
  <>

      <h1>Entrooou</h1>

    </>
  )
};

