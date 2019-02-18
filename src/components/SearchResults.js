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
    console.log(this.props)
    if(this.props.address){
    this.getResults()
  }
  else if (this.props.coords){
    this.coordsResults(this.props.coords)
  }
  }
  componentDidUpdate(prevProps){
    if(this.props.address!==prevProps.address &&this.props.address){
      this.getResults()
    }
    else if (this.props.coords !==prevProps.coords &&this.props.coords){
      this.coordsResults(this.props.coords)
    }
  }
  coordsResults = (theCoords) =>{
    axios.get(`http://localhost:3000/chiropractors/coords`,{
      params:{
        lat:theCoords["lat"],
        long:theCoords["long"]
      }
    })
    .then(res =>{
    this.setState({ results: res.data.results });
    })
  }
  getResults = () => {
    let theSearch=this.props.address.split(" ").join("+")+"+"+this.props.city.split(" ").join("+")+"+"+this.props.state.split(" ").join("+")+"+"+this.props.zip
      axios.get(`http://localhost:3000/chiropractors/1`,{
        params:{
          search:theSearch
        }
      }).then(res => {
        this.setState({ results: res.data.results });
      });
  }
  showDiv = () => {
    let results = this.state.results.map(result => (
      <Result Query={result} key={result.id} />
    ));
    if (this.props.address || this.props.search) {
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
  console.log(theState.search)
  return {
    search: theState.search,
    address: theState.search.address,
    city: theState.search.city,
    state: theState.search.state,
    zip: theState.search.zip,
    coords:theState.coords
  };
};
export default connect(mapStateToProps)(SearchResults);
