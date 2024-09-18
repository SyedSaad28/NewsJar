import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
          <span className="badge rounded-pill bg-danger">
            {source}
          </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://dims.apnews.com/dims4/default/44d54c8/2147483647/strip/true/crop/4836x2720+0+131/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb1%2F55%2Fcfab0f06c708a34e3ab0cc7ba28e%2F0d0a86f8a3d146b6a4dcfc51f22aff47"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
