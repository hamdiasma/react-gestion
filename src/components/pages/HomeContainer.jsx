import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import iconSeries from "../../assets/images/tv-show-icon.jpg";
import iconMovies from "../../assets/images/icon.png";

const HomeContainer = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col text-center">
          <Link to="/series">
            <Button color="light" className="p-5">
              <img
                className="mb-5"
                src={iconSeries}
                alt="Series"
                style={{ width: 250 }}
              />
              <h3>Series</h3>
            </Button>
          </Link>
        </div>
        <div className="col text-center">
          <Link to="/movies">
            <Button color="light" className="p-5">
              <img
                className="mb-5"
                src={iconMovies}
                alt="Movies"
                style={{ width: 250 }}
              />
              <h3>Movies</h3>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
