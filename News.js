import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ country, pageSize, category, setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    document.title = `${category} - NewsJar`;
    fetchNews(page);
    //eslint-disable-next-line
}, []);

  const fetchNews = async (pageNumber = 1) => {
    setProgress(10);
    try {
      setLoading(true);
      setProgress(30);
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=7e70d057198e405386b4f768b3524d10&page=${pageNumber}&pagesize=${pageSize}`;
      const response = await fetch(url);
      setProgress(70);
      const { articles: newArticles, totalResults: results } = await response.json();

      setArticles((prevArticles) => [...prevArticles, ...newArticles]); // Append new articles to existing ones
      setTotalResults(results);
      setLoading(false);
      setProgress(100);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const fetchMoreData = () => {
    // Increment page and trigger data fetching
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0px", marginTop: "90px" }}>
        NewsJar - Top headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage ? element.urlToImage : ""}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
};

News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "general",
};

export default News;
