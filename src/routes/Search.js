import React from "react";
import SearchForm from "../components/SearchForm";
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { connect } from "react-redux"
import SearchResults from '../components/SearchResults'
class Search extends React.Component {
  state={
    address:"",
    city:"",
    state:"",
    zip:"",
    mount:false
  }
  changeHandler = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  submitHandler = (e)=>{
    e.preventDefault()

    this.props.submitQuery(this.state)
    this.setState({
      mount:true,
      address:"",
      city:"",
      state:"",
      zip:""
    })
  }
componentDidMount(){
  if(typeof(this.props.address)==="string"){
    this.setState({mount:true})
  }

}
  render() {
    console.log(this.state.mount)
    return (
      <Fade duration={2500}>

      <div className="WholeSearchDiv">
        <Bounce left duration={2500}>
        <div className="searchFormDiv">
          <SearchForm state={this.state} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
        </div>
        </Bounce>
      {this.state.mount ?  <SearchResults /> :null}
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

const mapStateToProps= (theState)=>{
  console.log(theState.search)
  return{
    address: theState.search
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);
