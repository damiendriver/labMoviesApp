// import React, { useState, useEffect } from "react";
import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addtoFavourites'

const HomePage = (props) => {
  const [page, setPage] = React.useState(1);
  const { data, error, isLoading, isError } = useQuery("discover", getMovies);

  const resultPage = (newPage) => {
    setPage(newPage);
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];
  const totalPage = data ? data.total_results : null;

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
      currentPage={page}
      resultPage={resultPage}
      totalPage={totalPage}
    />
  );
};
export default HomePage;