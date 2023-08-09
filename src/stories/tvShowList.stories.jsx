import React from "react";
import TVShowList from "../components/tvShowList";
import SampleTVShow from "./sampleTVData";
import { MemoryRouter } from "react-router";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import Grid from "@mui/material/Grid";
import TVShowsContextProvider from "../contexts/tvShowsContext";

export default {
    title: "Tv Show/TV Show list",
    component: TVShowList,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <TVShowsContextProvider>{Story()}</TVShowsContextProvider>,
    ],
};

export const Basic = () => {
    const tvShows = [
        { ...SampleTVShow, id: 1 },
        { ...SampleTVShow, id: 2 },
        { ...SampleTVShow, id: 3 },
        { ...SampleTVShow, id: 4 },
        { ...SampleTVShow, id: 5 },
    ];
    return (
        <Grid container spacing={5}>
            <TVShowList
                tvShows={tvShows}
                action={(tvShow) => <AddToFavouritesIcon tvShow={tvShow} />}
            />
        </Grid>
    );
};
Basic.storyName = "Default";