import React from "react";
import SearchForm from "../components/SearchForm";
class Search extends React.Component {
  render() {
    return (
      <div className="WholeSearchDiv">
        <div className="searchFormDiv">
          <SearchForm />
        </div>
      </div>
    );
  }
}

export default Search;
