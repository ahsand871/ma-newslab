import React, { Component } from "react";
export class NewsItem extends Component {
  render() {
    let { title, description, newsUrl, imageUrl, publishedAt, source, author } =
      this.props;
    return (
      <>
        <div className="card" style={{ width: "22rem" }}>
          <img
            src={imageUrl || `${import.meta.env.BASE_URL}/no-image.jpg`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `${import.meta.env.BASE_URL}no-image.jpg`;
            }}
            className="card-img-top"
            alt="image"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="text-body-secondary">
              Pulished At: {publishedAt} by {source}
            </p>
            {/* <p className="text-body-secondary">Author : {author}</p> */}
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              See details
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
