import React from "react";
import MovieCard from "./MovieCard";

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:5000/films");
    const content = await response.json();
    this.setState({ movies: content });
  }

  refresh = async () => {
    const response = await fetch("http://localhost:5000/films");
    const content = await response.json();
    this.setState({ movies: content });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.movies === null ? (
            <h3 className="col text-center mt-5">Loading...</h3>
          ) : this.state.movies.length === 0 ? (
            <h3 className="col text-center mt-5">No movies found...</h3>
          ) : (
            this.state.movies.map(m => (
              <MovieCard key={m._id} movie={m} refresh={this.refresh} />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default MoviesContainer;
