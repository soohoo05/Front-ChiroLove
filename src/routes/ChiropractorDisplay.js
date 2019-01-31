import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Fade from "react-reveal/Fade";
import axios from "axios";
import Rating from "../components/Rating";

class ChiropractorDisplay extends React.Component {
  state={
    link:""
  }
  db = () => {
    debugger;
  };
  componentDidMount(){

    if(!this.props.Query){this.props.history.replace('/')}

    let thisObject=this.props.Query
    console.log(thisObject)
    axios.get(`http://localhost:3000/map`,{
      params:{
        lat: thisObject.geometry.location.lat,
        lng: thisObject.geometry.location.lng
      }
    })
    .then(res=>{this.setState({link:res.data})})
  }
  render() {
    let parsed=this.props.Query.name.split(" ").join("+")

    if(!this.props.Query){this.props.history.replace('/')}
    let {Query}=this.props
    return (
      <Fade duration={2500}>
        <div className="Display">
          <h1>{Query.name}</h1>
          <h2>{Query.formatted_address}</h2>
          <div><Rating number={Query.rating} /></div>
          <img src={Query.icon} alt="icon"/>
          <div>
          <button className="NavButton" onClick={()=>window.open(`https://www.google.com/search?q=${parsed}`)}>Google it!</button>
          </div>
          <div className="googlemap">
          <iframe title="google-map"src ={this.state.link} className="gmiframe"></iframe>
          </div>
        </div>
      </Fade>
    );
  }
}

const mapStateToProps = theState => {
  return {
    Query: theState.QueryMore
  };
};
export default withRouter(connect(mapStateToProps)(ChiropractorDisplay));
