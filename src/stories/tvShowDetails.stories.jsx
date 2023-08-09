import React from "react";
import TVShowDetails from "../components/tvShowDetails";
import SampleTVShow from "./sampleTVData";
import { MemoryRouter } from "react-router";
import TVShowsContextProvider from "../contexts/tvShowsContext";


export default {
    title: "TV Show Details Page/TV Show Data",
    component: TVShowDetails,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <TVShowsContextProvider>{Story()}</TVShowsContextProvider>,
    ],
};

export const Basic = () => <TVShowDetails tvShow={SampleTVShow} />;

Basic.storyName = "Default";