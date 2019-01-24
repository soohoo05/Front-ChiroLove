import React from 'react';
import {Button} from 'semantic-ui-react'
class Home extends React.Component {
  render() {
    return <div className="Home">
            <h1 className="Intro">The website dedicated to finding a chiropractor near you!</h1>
            <Button color='blue'className="Intro">
      Lets Search!
    </Button>
          </div>;
  }
}
Home.propTypes = {

};
export default Home;
