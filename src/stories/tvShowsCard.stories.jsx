import React from "react";
import TVShowCard from "../components/tvShowCard";
import SampleTVShow from "./sampleData";
import { MemoryRouter } from "react-router";
import TVShowsContextProvider from "../contexts/tvShowsContext";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

export default {
  title: "TVShow Page/TVShowCard",
  component: TVShowCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TVShowsContextProvider>{Story()}</TVShowsContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TVShowCard
      tvShow={SampleTVShow}
      action={(tvShow) => <AddToFavouritesIcon tvShow={tvShow} />}
      taging={(tvShow) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTVShow, poster_path: undefined };
  return (
    <TVShowCard
      tvShow={sampleNoPoster}
      action={(tvShow) => <AddToFavouritesIcon tvShow={tvShow} />}
      taging={(tvShow) => null}
    />
  );
};
Exceptional.storyName = "exception";