import React from "react";
import Actors from "../actorsMovieCard";
import Grid from "@mui/material/Grid";

const ActorsList = ({ actors, action }) => {
    let actorsCards = actors.map((m) => (
        <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Actors key={m.id} actor={m} action={action} />
        </Grid>
    ));
    return actorsCards;
};

export default ActorsList;