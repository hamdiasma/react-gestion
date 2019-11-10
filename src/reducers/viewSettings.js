const initState = {
  seriePageSize: 8,
  moviePageSize: 8,
  serieView: "card",
  movieView: "card"
};

const viewSettings = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_MOVIES_VIEW":
      return {
        ...state,
        movieView: state.movieView === "table" ? "card" : "table"
      };
    case "TOGGLE_SERIES_VIEW":
      return {
        ...state,
        serieView: state.serieView === "table" ? "card" : "table"
      };
    case "CHANGE_SERIE_PAGE_SIZE":
      return {
        ...state,
        seriePageSize: action.payload
      };
    case "CHANGE_MOVIE_PAGE_SIZE":
      return {
        ...state,
        moviePageSize: action.payload
      };
    default:
      return state;
  }
};

export default viewSettings;
