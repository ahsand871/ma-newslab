import React, { Component } from "react";
import loader from "/loader.gif";
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={loader}
          alt="loader"
          style={{ width: "100px", height: "100px", objectFit: "contain" }}
        />
      </div>
    );
  }
}

export default Spinner;
