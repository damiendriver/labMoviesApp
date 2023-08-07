import React from "react";
import { useParams } from "react-router-dom";
import ActorsDetails from "../components/actorsDetails";
import PageTemplate from "../components/templateActorsPage";
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const ActorDetailsPage = () => {
    const { id } = useParams();

    const { data: actor, error, isLoading, isError } = useQuery(["actor", { id: id }], getActor);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <>
            {actor ? (
                <>
                    <PageTemplate actor={actor}>
                        <ActorsDetails actor={actor} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for actor details</p>
            )}
        </>
    );
};

export default ActorDetailsPage;