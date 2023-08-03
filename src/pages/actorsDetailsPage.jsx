import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateActorsListPage";
import { getActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";


const ActorsPage = (props) => {
    const { data, error, isLoading, isError } = useQuery("actors", getActors);

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const actors = data ? data.results : [];

    return (
        <PageTemplate
            title="Movie Actors"
            actors={actors}
        />
    );
};
export default ActorsPage;