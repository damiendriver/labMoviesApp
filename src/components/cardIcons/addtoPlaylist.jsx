// import React from "react";
import React, { useContext } from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";

const AddtoPlaylistIcon = ({ movie }) => {
    const context = useContext(MoviesContext);

    const onUserSelect = (e) => {
      e.preventDefault();
      context.addToMustWatch(movie);
      console.log(context.mustWatch); 
    };

    return (
        // <PlaylistAddIcon color="primary" fontSize="large" />
        <IconButton aria-label="add to favorites" onClick={onUserSelect}>
        <PlaylistAddIcon color="primary" fontSize="large" />
      </IconButton>
    );
};

export default AddtoPlaylistIcon;