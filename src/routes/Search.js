import React from "react";
import SearchForm from "../components/SearchForm";
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { connect } from "react-redux"
import parser from 'parse-address'
import SearchResults from '../components/SearchResults'
class Search extends React.Component {
  state={
    address:"",
    city:"",
    state:"",
    zip:""
  }
  changeHandler = (e) =>{
    console.log(e.target.name+" ssss " + "")
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  submitHandler = (e)=>{
    e.preventDefault()
    let address=this.state.address+" "+this.state.city+", "+this.state.state+" "+this.state.zip
    let parsed=parser.parseLocation(address)
    this.props.submitQuery(this.state)
  }

  render() {
    return (
      <Fade duration={2500}>

      <div className="WholeSearchDiv">
        <Bounce left duration={2500}>
        <div className="searchFormDiv">
          <SearchForm state={this.state} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
        </div>
        </Bounce>
        <SearchResults />
      </div>
    </Fade>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    submitQuery: (search)=> dispatch({type:"SUBQUERY",payload:search})
  }
}



export default connect(null,mapDispatchToProps)(Search);
