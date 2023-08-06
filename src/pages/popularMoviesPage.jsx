import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getPopularMovies } from "../api/tmdb-api";
import AddtoPlaylistIcon from '../components/cardIcons/addtoPlaylist';
import { useQuery } from "react-query";
import Spinner from "../components/spinner";


const PopularMoviesPage = (props) => {
  const [pageNumber, setPageNumber] = React.useState(1);
  const { data, error, isLoading, isError } = useQuery(["PopularMovies", pageNumber], () => getPopularMovies(pageNumber));

  const resultPage = (newPage) => {setPageNumber(newPage);};

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
      title='Popular Movies'
      movies={movies}
      action={(movie) => {
        return  <AddtoPlaylistIcon movie={movie} />
      }}
      currentPage={pageNumber}
      resultPage={resultPage}
      totalPage={totalPage}
      />
  );
};
export default PopularMoviesPage;