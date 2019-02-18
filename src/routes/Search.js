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
  if(typeof(this.props.address)==="string" || this.props.mount===true){
    this.setState({mount:true})
  }

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

const mapStateToProps= (theState)=>{
  return{
    address: theState.search,
    mount:theState.mount
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);
