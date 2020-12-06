import React from "react";
import {BrowserRouter, Switch, Route,} from "react-router-dom";
import "./styles.css";
import { MoviesList } from "./components/MoviesList";
import { MovieDetails } from "./components/MovieDetails";


export default function App() {
  return (

    <>
      <BrowserRouter>

        <Switch>
          <Route exact path ="/">
            <MoviesList />
          </Route>

          <Route path = "/movie/:id">
            <MovieDetails />
          </Route>
        </Switch>

      </BrowserRouter>
    </>
  );
}

