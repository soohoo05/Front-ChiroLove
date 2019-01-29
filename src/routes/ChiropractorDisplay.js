import React from "react";
import { connect } from "react-redux";

class ChiropractorDisplay extends React.Component {
  render() {
    return null;
  }
}

const mapStateToProps = theState => {
  return {
    Query: theState.QueryMore
  };
};
export default connect(mapStateToProps)(ChiropractorDisplay);
