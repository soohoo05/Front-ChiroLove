import React from "react";
import { Button } from "semantic-ui-react";
import { withRouter } from "react-router";
class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="HomeTAB">
          <h1 className="Intro">
            The website dedicated to finding a chiropractor near you!
          </h1>
          <Button
            color="blue"
            className="Intro"
            onClick={() => this.props.history.replace("/Search")}
          >
            Lets Search!
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
