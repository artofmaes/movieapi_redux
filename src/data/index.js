import { createStore, applyMiddleware, combineReducers } from "redux";
import favoriteReducer from "./favorites";
import moviesReducer from "./movies";
import thunk from "redux-thunk";
import logger from "redux-logger";

export default createStore(
  combineReducers({
    favorites: favoriteReducer,
    movies: moviesReducer
  }),
  applyMiddleware(thunk, logger)
);
