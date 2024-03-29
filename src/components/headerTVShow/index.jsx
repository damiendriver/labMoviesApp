import React, { useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardHeader from "@mui/material/CardHeader";
import { TVShowsContext } from "../../contexts/tvShowsContext";
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

const TVShowHeader = (props) => {
	const tvShow = props.tvShow;
	const { favourites } = useContext(TVShowsContext);
  const navigate = useNavigate();

	if (favourites.find((id) => id === tvShow.id)) {
		tvShow.favourite = true;
	} else {
		tvShow.favourite = false;
	}

	return (
		<Paper component="div" sx={styles.root}>
			<IconButton aria-label="go back" onClick={() => navigate(-1)}>
				<ArrowBackIcon color="primary" fontSize="large" />
			</IconButton>

			{tvShow.favourite ? (
				<Avatar sx={styles.avatar}>
					<FavoriteIcon />
				</Avatar>
			) : null}

      <Typography variant="h4" component="h3">
        {tvShow.name}{"   "}
        <a href={tvShow.homepage}>
          <HomeIcon color="primary"  fontSize="='large"/>
        </a>
        <br />
        <span>{`${tvShow.tagline}`} </span>
      </Typography>
      <IconButton aria-label="go forward" onClick={() => navigate(1)}>
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default TVShowHeader;