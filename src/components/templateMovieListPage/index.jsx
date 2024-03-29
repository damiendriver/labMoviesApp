import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieList from "../movieList";
import Stack from '@mui/material/Stack';
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function MovieListPageTemplate({ movies, title, action, currentPage, totalPage, resultPage, paginationHidden }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [yearFilter, setYearFilter] = useState("");

  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
     // return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;

      const toSearch = m.title ? m.title : m.name;
      return toSearch.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "title") setTitleFilter(value);
    if (type === "year") setYearFilter(value);
    else setGenreFilter(value);
  };

  const handlePaginationChange = (event, value) => {
    resultPage(value);
  };
  //console.log('result page : ', resultPage)
  //console.log('current page : ', currentPage)
  return (
   <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
        <MovieList action={action} movies={displayedMovies} />
        </Grid>
        {!paginationHidden && (
        <>
        <Stack spacing={2}>
        <Typography> Total Movies Found: {totalPage} </Typography>
        <Pagination count={25} color="primary" shape="rounded" page={currentPage} onChange={handlePaginationChange} />
        </Stack>
          </>
        )}
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          yearFilter={yearFilter}
        />
      </Drawer>
    </>  
  );
}
export default MovieListPageTemplate;
