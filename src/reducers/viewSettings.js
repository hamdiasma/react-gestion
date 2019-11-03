const initState = {
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
    default:
      return state;
  }
};

export default viewSettings;
