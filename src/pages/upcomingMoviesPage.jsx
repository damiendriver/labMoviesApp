// import React, { useState, useEffect } from "react";
// import React from "react";
import React, { useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
// import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import AddtoPlaylistIcon from '../components/cardIcons/addtoPlaylist';
import { useQuery } from "react-query";
import Spinner from "../components/spinner";


const UpcomingMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discoverUpcomingMovies", getUpcomingMovies);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return  <AddtoPlaylistIcon movie={movie} />
      }}
      />
  );
};
export default UpcomingMoviesPage;