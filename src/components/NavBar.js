import React from "react";
import { withRouter } from "react-router";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import parser from "parse-address"
class NavBar extends React.Component {
  state={
    address:""
  }
  changeHandler = (e) =>{
    this.setState({
      address: e.target.value
    })
  }
  submitHandler = (e) =>{
    e.preventDefault()
    let parsed=parser.parseLocation(this.state.address)
    let search={
      address: parsed["number"]+" "+parsed["street"]+" "+parsed["type"],
      city:parsed["city"],
      state:parsed["state"],
      zip:parsed["zip"]
    }
    this.props.submitQuery(search)
    this.props.history.replace('/Search')
  }
  locate = () =>{
    let geo = navigator.geolocation
    let submitGeo=this.props.submitGeo
    let history=this.props.history
    geo.getCurrentPosition(function(position){
      submitGeo(position.coords.latitude,position.coords.longitude)
      history.replace('/Search')
    })

  }
  render() {
    return (
      <div className="NavBar">
        <Fade left duration={2000}>
          <div
            className="LogoHeart"
            onClick={() => this.props.history.replace("/")}
          >
            <h1 className="Logo">ChiroLove</h1>
            <img
              className="Heart"
              src="http://www.clker.com/cliparts/f/n/o/m/6/C/transparent-heart-hi.png"
              height="40px"
              alt="heart"
            />
          </div>
        </Fade>
        <Fade top duration={2000}>
          <div className="SearchDiv">
            <form className="NavSearch" onSubmit={(e)=>this.submitHandler(e)}>
              <input onChange={(e)=>this.changeHandler(e)} value={this.state.address} className="NavSearchInput" placeholder="Type an address" />
            <button className="NavButton">Go!</button>
          </form>
            <h1 className="Or">Or</h1>
            <button className="NavButton Locate" onClick={()=>this.locate()}>Locate Me!</button>
          </div>
        </Fade>
      </div>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    submitQuery: (search)=> dispatch({type:"SUBQUERY",payload:search}),
    submitGeo: (lat,long)=>dispatch({type:"SUBGEO",payload:{lat,long}})
  }
}
export default withRouter(connect(null,mapDispatchToProps)(NavBar));
