import React, { Fragment } from "react";
import { Button, ButtonGroup, Col, Row, Table } from "reactstrap";
import AddIcon from "../../assets/images/add.svg";
import List from "../../assets/images/list.svg";
import Card from "../../assets/images/view.svg";
import AddSerieModal from "../modals/AddSerieModal";
import MyCard from "../MyCard";
import MyRow from "../MyRow";
import MyPageSize from "../MyPageSize";
import MyPagination from "../MyPagination";

class SeriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: null,
      view: "table",
      seriesNb: 0,
      pagesNb: 0,
      pageSize: 8,
      currentPage: 1
    };
  }

  async componentDidMount() {
    const response = await fetch(
      `http://localhost:5000/series/${this.state.pageSize}/${this.state.currentPage}`
    );
    const content = await response.json();
    this.setState({
      series: content.docs,
      seriesNb: content.total,
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
      `http://localhost:5000/series/${this.state.pageSize}/${this.state.currentPage}`
    );
    const content = await response.json();
    this.setState({
      series: content.docs,
      seriesNb: content.total,
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
          <Row style={{ width: "100%" }}>
            {this.props.currentUser.name ? (
              <Col>
                <Button color="success" onClick={() => this.toggleAdd()}>
                  <span role="img" aria-label="add">
                    <img src={AddIcon} alt="Add" />
                  </span>{" "}
                  Add serie
              </Button>
              </Col>)
              : (<Fragment />
              )}

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
            <Col style={{ display: "flex" }}>
              <MyPageSize handle={this.handlePageSize} />
              <MyPagination
                seriesNb={this.state.seriesNb}
                currentPage={this.state.currentPage}
                pagesNb={this.state.pagesNb}
                next={this.next}
                prev={this.prev}
                goTo={this.goTo}
              />
            </Col>
            <AddSerieModal
              isOpen={this.state.isAddOpen}
              toggle={this.toggleAdd}
              refresh={this.refresh}
            />
          </Row>
        </div>
        <div className="row">
          {this.state.series === null ? (
            <h3 className="col text-center">Loading...</h3>
          ) : this.state.series.length === 0 ? (
            <h3 className="col text-center">No series found...</h3>
          ) : this.state.view === "card" ? (
            this.state.series.map(s => (
              <MyCard key={s._id} element={s} refresh={this.refresh} type="serie" />
            ))
          ) : (
                  <Table bordered hover striped>
                    <thead>
                      <tr>
                        <th style={{ textAlign: "center" }}>Poster</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Runtime</th>
                        {this.props.currentUser.name ? (
                          <th style={{ textAlign: "right" }}>Actions</th>) : (<Fragment />)}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.series.map(s => (
                        <MyRow key={s._id} element={s} refresh={this.refresh} type="serie" />
                      ))}
                    </tbody>
                  </Table>
                )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  {}
)(MoviesContainer);

