import React from "react";
import { Button } from "semantic-ui-react";
import { withRouter } from "react-router";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

class Home extends React.Component {
  render() {
    
    return (
      <Fade duration={2500}>
        <div className="Home">
          <Zoom duration={2500}>
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
          </Zoom>
        </div>
      </Fade>
    );
  }
}

export default withRouter(Home);
