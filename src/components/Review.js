import React from 'react';

class Review extends React.Component {
  render() {
    console.log(this.props.aReview)
    return (<div className="aReview">
    <h1> Name: {this.props.aReview.author_name}</h1>
    <p>Rating: {this.props.aReview.rating}</p>
    <p>{this.props.aReview.text}</p>
    </div>
    )
  }
}

export default Review;
