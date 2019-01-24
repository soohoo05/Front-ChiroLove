import React from 'react';
import { withRouter } from "react-router";
class NavBar extends React.Component {
  render() {
    return (
    <div className="NavBar">
    <div className="LogoHeart" onClick={()=>this.props.history.replace('/')} >
    <h1 className="Logo">ChiroLove</h1>
    <img className="Heart" src="http://www.clker.com/cliparts/f/n/o/m/6/C/transparent-heart-hi.png" height="40px"alt="heart"/>
    </div>
    </div>
  );
  }
}

export default withRouter(NavBar);
