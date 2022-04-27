import React, { Component } from "react";
export default class DetailsPage extends Component {
  render() {
    return(
      <div>
        <h2>{this.props.match.params.id}</h2>
      </div>
    )
  }
}