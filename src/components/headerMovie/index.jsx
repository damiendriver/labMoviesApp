import React, { useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";
import { useNavigate } from 'react-router-dom';

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const MovieHeader = (props) => {
	const movie = props.movie;
	const { favourites } = useContext(MoviesContext);

	if (favourites.find((id) => id === movie.id)) {
		movie.favourite = true;
	} else {
		movie.favourite = false;
	}

	const navigate = useNavigate();

	return (
		<Paper component="div" sx={styles.root}>
			<IconButton aria-label="go back" onClick={() => navigate(-1)}>
				<ArrowBackIcon color="primary" fontSize="large"  />
			</IconButton>

			{movie.favourite ? (
				<Avatar sx={styles.avatar}>
					<FavoriteIcon />
				</Avatar>
			) : null}

			<Typography variant="h4" component="h3">
				{movie.title}
				{"   "}
				<a href={movie.homepage} target="_blank">
					<HomeIcon color="primary" fontSize="='large" />
				</a>
				<br />
				<span>{`${movie.tagline}`} </span>
			</Typography>
			<IconButton aria-label="go forward" onClick={() => navigate(1)}>
				<ArrowForwardIcon color="primary" fontSize="large" />
			</IconButton>
		</Paper>
	);
};

export default MovieHeader;