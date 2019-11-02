import React from "react";
import { Button, Row, Col, ButtonGroup, Table } from "reactstrap";
import MovieCard from "../MovieCard";
import MovieRow from "../MovieRow";
import AddMovieModal from "../modals/AddMovieModal";
import MyPagination from "../MyPagination";
import MyPageSize from "../MyPageSize";
import List from "../../assets/images/list.svg";
import Card from "../../assets/images/view.svg";

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      view: "table",
      moviesNb: 0,
      pagesNb: 0,
      pageSize: 4,
      currentPage: 1
    };
  }

  async componentDidMount() {
    const response = await fetch(
      `http://localhost:5000/films/${this.state.pageSize}/${this.state.currentPage}`
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

  handlePageSize = size => {
    this.setState({ pageSize: size }, () => this.refresh());
  };

  handleView = () => {
    console.log("V");
    this.setState({ view: this.state.view === "card" ? "table" : "card" }, () =>
      this.refresh()
    );
  };

  refresh = async () => {
    const response = await fetch(
      `http://localhost:5000/films/${this.state.pageSize}/${this.state.currentPage}`
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
        <div
          className="mt-5 mb-5"
          style={{ display: "flex", placeContent: "space-between" }}
        >
          <Row>
            <Col>
              <Button color="success" onClick={() => this.toggleAdd()}>
                <span role="img" aria-label="add">
                  ➕
                </span>{" "}
                Add movie
              </Button>
            </Col>
            <Col>
              <ButtonGroup>
                <Button
                  color="light"
                  disabled={this.state.view === "table" ? true : false}
                  onClick={this.handleView}
                >
                  <img src={List} alt="Table view" /> Table
                </Button>
                <Button
                  color="light"
                  disabled={this.state.view === "card" ? true : false}
                  onClick={this.handleView}
                >
                  <img src={Card} alt="Card view" /> Cards
                </Button>
              </ButtonGroup>
            </Col>
            <Col>
              <MyPagination
                moviesNb={this.state.moviesNb}
                currentPage={this.state.currentPage}
                pagesNb={this.state.pagesNb}
                next={this.next}
                prev={this.prev}
                goTo={this.goTo}
              />
            </Col>
            <Col>
              <MyPageSize handle={this.handlePageSize} />
            </Col>
            <AddMovieModal
              isOpen={this.state.isAddOpen}
              toggle={this.toggleAdd}
              refresh={this.refresh}
            />
          </Row>
        </div>
        <div className="row">
          {this.state.movies === null ? (
            <h3 className="col text-center">Loading...</h3>
          ) : this.state.movies.length === 0 ? (
            <h3 className="col text-center">No movies found...</h3>
          ) : this.state.view === "card" ? (
            this.state.movies.map(m => (
              <MovieCard key={m._id} movie={m} refresh={this.refresh} />
            ))
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>Poster</th>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Runtime</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.movies.map(m => (
                  <MovieRow key={m._id} movie={m} refresh={this.refresh} />
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    );
  }
}

export default MoviesContainer;
