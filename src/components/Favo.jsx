import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../data/favorites";

export default imdbID => {
  const favoriteData = useSelector(state => state.favorites);
  const dispatch = useDispatch();
  const liked = favoriteData.includes(imdbID);
  const handleChange = e => {
    if (liked) {
      dispatch(removeFavorite(imdbID));
    } else {
      dispatch(addFavorite(imdbID));
    }
  };

  return (
    <div>
      <input type="checkbox" checked={liked} onChange={handleChange} />
    </div>
  );
};
