import React from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import axios from "axios";
import Result from "./Result.js";
class SearchResults extends React.Component {
  state = {
    results: []
  };
  componentDidMount() {

    axios.get(`http://localhost:3000/chiropractors/1`).then(res => {
      this.setState({ results: res.data.results });
    });
  }
  showDiv = () => {
    let results = this.state.results.map(result => (
      <Result Query={result} key={result.id} />
    ));
    if (this.props.address) {
      return (
        <Fade>
          <div className="ResultDiv">{results}</div>
        </Fade>
      );
    } else {
      return null;
    }
  };
  render() {
    return this.showDiv();
  }
}

const mapStateToProps = theState => {
  return {
    address: theState.search.address,
    city: theState.search.city,
    state: theState.search.state,
    zip: theState.search.zip
  };
};
export default connect(mapStateToProps)(SearchResults);
