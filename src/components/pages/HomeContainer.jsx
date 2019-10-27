import React from "react";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      moviesNb: 0,
      pagesNb: 0,
      pageLength: 4,
      currentPage: 1
    };
  }

  async componentDidMount() {
    const response = await fetch(
      `http://localhost:5000/films/${this.state.currentPage}`
    );
    const content = await response.json();
    this.setState({
      movies: content.docs,
      moviesNb: content.total,
      pagesNb: content.pages
    });
  }

  next = () => {
    if (this.state.currentPage < this.state.pagesNb)
      this.setState({ currentPage: this.state.currentPage + 1 }, () =>
        this.refresh()
      );
  };

  prev = () => {
    if (this.state.currentPage > 1)
      this.setState({ currentPage: this.state.currentPage - 1 }, () =>
        this.refresh()
      );
  };

  goTo = page => {
    this.setState({ currentPage: page }, () => this.refresh());
  };

  refresh = async () => {
    const response = await fetch(
      `http://localhost:5000/films/${this.state.currentPage}`
    );
    const content = await response.json();
    this.setState({
      movies: content.docs,
      moviesNb: content.total,
      pagesNb: content.pages
    });
  };

  toggleAdd = () => {
    this.setState({ isAddOpen: !this.state.isAddOpen });
  };

  render() {
    return (
      <div className="container">
        Home
      </div>
    );
  }
}

export default HomeContainer;
