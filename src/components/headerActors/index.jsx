import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardHeader } from "@mui/material";

const styles = {
    root: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        padding: 1.5,
    },
    favouriteAvatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
};

const ActorsHeader = (props) => {
	const actor = props.actor;
	const { favourites } = useContext(MoviesContext);

	if (favourites.find((id) => id === actor.id)) {
		actor.favourite = true;
	} else {
		actor.favourite = false;
	}

    return (
        <Paper component="div" sx={styles.root}>
			<IconButton aria-label="go back">
				<ArrowBackIcon color="primary" fontSize="large" />
			</IconButton>

			{actor.favourite ? (
				<Avatar sx={styles.avatar}>
					<FavoriteIcon />
				</Avatar>
			) : null}


            <Typography variant="h4" component="h3">
                {actor.name}{"   "}
                <br />
            </Typography>
            <IconButton aria-label="go forward">
                <ArrowForwardIcon color="primary" fontSize="large" />
            </IconButton>
        </Paper>
    );
};

export default ActorsHeader;