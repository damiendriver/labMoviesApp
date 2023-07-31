import React, { useState } from "react";

export const TVShowsContext = React.createContext(null);

const TVShowsContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [myReviews, setMyReviews] = useState( {} );  // NEW
  const [mustWatch, setMustWatch] = useState([]);

  const addReview = (tvShow, review) => {   // NEW
    setMyReviews( {...myReviews, [tvShow.id]: review } )
  };

  const addToFavourites = (tvShow) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(tvShow.id)) {
      updatedFavourites.push(tvShow.id);
    }
    setFavourites(updatedFavourites);
  };

  const addToMustWatch = (tvShow) => {
    let updatedMustWatch = [...mustWatch];
    if (!mustWatch.includes(tvShow.id)) {
      updatedMustWatch.push(tvShow.id);
    }
    setMustWatch(updatedMustWatch);
    console.log('addToMustWatch')
   };


  // We will use this function in a later section
  const removeFromFavourites = (tvShow) => {
    setFavourites(favourites.filter((mId) => mId !== tvShow.id));
  };

 return (
    <TVShowsContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,    // NEW
        addToMustWatch,
        mustWatch,
      }}
    >
      {props.children}
    </TVShowsContext.Provider>
  );
};

export default TVShowsContextProvider;