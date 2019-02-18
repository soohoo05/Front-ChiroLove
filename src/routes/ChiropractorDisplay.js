import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Fade from "react-reveal/Fade";
import axios from "axios";
import Rating from "../components/Rating";
import Review from '../components/Review'
class ChiropractorDisplay extends React.Component {
  state={
    link:""
  }

  componentDidUpdate(prevState){
    if(this.props.Query!==prevState.Query){

    let thisObject=this.props.Query
    axios.get(`http://localhost:3000/map`,{
      params:{
      name:thisObject.name
      }
    })
    .then(res=>{this.setState({link:res.data})})
  }
  }
  render() {

    let reviews
    if(this.props.Query.reviews){

    reviews=this.props.Query.reviews.map(review => <Review aReview={review} key={review.id}/>)
    }
    console.log(this.props.Query)
    let {Query}=this.props
    return (
      <Fade duration={2500}>
        <div className="wholeDisplay">
        <div className="Display">
          <h1>{Query.name}</h1>
          <h2>{Query.formatted_address}</h2>
          <h2>{Query.formatted_phone_number}</h2>
          <div><Rating number={Query.rating} /></div>
          <div><a href={Query.website}>{Query.website}</a></div>
          <img src={Query.icon} alt="icon"/>
          <div>
          </div>
          <div className="googlemap">
          <iframe title="google-map"src ={this.state.link}className="gmiframe"></iframe>
          </div>
        </div>
        <div className="Display"><div className="Reviews">{reviews}</div></div>
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
