import React, { Component } from 'react';
import notFound from "/notFound.gif";

export default class NotFound extends Component {
  render() {
    return (
      <>
            <div className={`alert custom-toast alert-info alert-dismissible fade show`} role="alert">
                <strong>No Articles Found</strong>! Please try different keywords.
            </div>
            <div className="d-flex justify-content-center" style={{borderRadius : '25px'}}>
            <img
                src={notFound}
                alt="not found"
                style={{ width: "100%", height: "28em", objectFit: "contain" }}
            />
            </div>
            <div className="d-flex justify-content-center">
                <button
                        type="button"
                        className="btn btn-dark my-3"
                        onClick={() => window.location.reload()}
                        style={{ width: "20em" }}
                    >
                    Return to Home
                    </button>
            </div>
        </>
    )
  }
}
