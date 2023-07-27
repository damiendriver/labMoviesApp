import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTVShows } from "../api/tmdb-api";
import AddtoPlaylistIcon from '../components/cardIcons/addtoPlaylist';
import { useQuery } from "react-query";
import Spinner from "../components/spinner";


const TVShowsPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("tv", getTVShows);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const tvShows = data ? data.results : [];

  return (
    <PageTemplate
      title='TV Shows'
      movies={tvShows}
      action={(movie) => {
        return  <AddtoPlaylistIcon movie={movie} />
      }}
      />
  );
};
export default TVShowsPage;