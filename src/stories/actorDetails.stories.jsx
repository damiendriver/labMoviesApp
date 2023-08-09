import React from "react";
import ActorsDetails from "../components/actorsDetails";
import SampleActor from "./sampleActorData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
    title: "Actor Details Page/Actor Data",
    component: ActorsDetails,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    ],
};

export const Basic = () => <ActorsDetails actor={SampleActor} />;

Basic.storyName = "Default";