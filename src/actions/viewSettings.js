export const toggleMoviesView = () => {
  return {
    type: "TOGGLE_MOVIES_VIEW"
  };
};
export const toggleSeriesView = () => {
  return {
    type: "TOGGLE_SERIES_VIEW"
  };
};
export const changeSeriePageSize = value => {
  return {
    type: "CHANGE_SERIE_PAGE_SIZE",
    payload: value
  };
};
export const changeMoviePageSize = value => {
  return {
    type: "CHANGE_MOVIE_PAGE_SIZE",
    payload: value
  };
};
