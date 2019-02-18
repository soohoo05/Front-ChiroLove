import React from "react";
import Rating from "./Rating";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Fade from "react-reveal/Fade";
import {getMore} from '../actions/actions'
class Result extends React.Component {
  clickHandler = () => {
    this.props.SeeMore(this.props.Query.place_id);
    let name = this.props.Query.name.replace(/[^\w\s]/gi, "");
    let splitted = name.split(" ");
    let joined = splitted.join("+");
    this.props.history.replace(`/Chiropractor/${joined}`);
  };
  render() {
    let { Query } = this.props;
    return (
      <Fade right duration={2500}>
        <div className="QueryResultDiv">
          <div className="QueryNameDiv">
            <h1>{Query.name}</h1>
          </div>
          <div className="IRSMDiv">
            <img src={Query.icon} alt="icon"/>
            <h1 className="Rating">
              Rating: <Rating number={Query.rating} />
            </h1>
            <button
              className="NavButton QueryButton"
              onClick={() => this.clickHandler()}
            >
              See More
            </button>
          </div>
        </div>
      </Fade>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    SeeMore: Query => dispatch(getMore(Query))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Result)
);
