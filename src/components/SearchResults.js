import React from 'react';
import { connect } from "react-redux"

class SearchResults extends React.Component {
  state={
    results:[]
  }
  componentDidUpdate(){
    console.log(this.props)
  }
  render() {
    return <div className="ResultDiv"></div>;
  }
}

const mapStateToProps=(theState)=>{
  return{
    address:theState.search.address,
    city:theState.search.city,
    state:theState.search.state,
    zip:theState.search.state
      }
    }
export default connect(mapStateToProps)(SearchResults);
