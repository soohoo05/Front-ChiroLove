import React from "react";

class Rating extends React.Component {
  rating = () => {
    switch (this.props.number) {
      case 0:
        return (
          <React.Fragment>
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </React.Fragment>
        );
      case 4:
        return (
          <React.Fragment>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
          </React.Fragment>
        );
      case 5:
      default:
        return (
          <React.Fragment>
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </React.Fragment>
        );
    }
  };
  render() {
    return this.rating();
  }
}
Rating.propTypes = {};
export default Rating;
