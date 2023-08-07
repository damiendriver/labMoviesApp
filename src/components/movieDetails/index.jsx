import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieReviews from '../movieReviews';
import GroupIcon from '@mui/icons-material/Group';
import Spinner from "../spinner";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from "@mui/material/TableHead";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovieActor } from "../../api/tmdb-api";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: { 
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const MovieDetails = ( {movie}) => {
  const [drawerOpen, setDrawerOpen] = useState(false); // New
  const { data , error, isLoading, isError } = useQuery(["movieCast", { id: movie.id }], getMovieActor);

  if (isLoading) {
    return <Spinner />;
  };
  if (isError) {
    return <h1>{error.message}</h1>;
  };

  const cast = data.cast.slice(0,10);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name}  />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <Link to={`/movies/${movie.id}`}>
        <Chip icon={<GroupIcon />} label={`Cast`} color="secondary" />
        </Link>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>
      
      <br />
      <Typography variant="h5" component="h3">
        Cast
      </Typography>
      <TableContainer component={Paper}>
      <Table aria-label="Cast List Table">
          <TableHead>
            <TableRow sx={{backgroundColor: "yellow"}}>
              <TableCell>Actor</TableCell>
              <TableCell>Film Character</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {cast.map((actor) => (
              <TableRow key={actor.name}>
                  <TableCell>
                  <Link to={`/actors/${actor.id}`}>
                    {actor.name}
                    </Link>
                  </TableCell>
                <TableCell>{actor.character}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>

      <Fab    
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};
export default  MovieDetails ;

