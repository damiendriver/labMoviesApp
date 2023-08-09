import React from "react";
import ActorsCard from "../components/actorsMovieCard";
import SampleActor from "./sampleActorData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";


export default {
    title: "Actor/Actor Card",
    component: ActorsCard,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    ],
};

export const Basic = () => {
    return (
        <ActorsCard
            actor={SampleActor}
            action={(actor) => <AddToFavouritesIcon actor={actor} />}
            taging={(actor) => null}
        />
    );
};
Basic.storyName = "Default";

export const Exceptional = () => {
    const sampleNoPoster = { ...SampleActor, poster_path: undefined };
    return (
        <ActorsCard
            actor={sampleNoPoster}
            action={(actor) => <AddToFavouritesIcon actor={actor} />}
            taging={(actor) => null}
        />
    );
};
Exceptional.storyName = "exception";