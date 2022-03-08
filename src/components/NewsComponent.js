import React, { useEffect, useState } from "react";
import NewsItemComponent from "./NewsItemComponent";
import SpinnerComponent from "./SpinnerComponent";
import InfiniteScroll from "react-infinite-scroll-component";

import PropTypes from "prop-types";

const NewsComponent = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  // document.title = `${capitalize(this.props.category)} - News App`;
  useEffect(() => {
    updateNews();
  }, []);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const updateNews = async () => {
    props.increaseProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let response = await fetch(url);
    props.increaseProgress(30);
    let data = await response.json();
    props.increaseProgress(60);
    setArticles(data.articles);
    setTotalArticles(data.totalArticles);
    setLoading(false);
    props.increaseProgress(100);
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setArticles(articles.concat(data.articles));
    setTotalArticles(data.totalArticles);
    setLoading(false);
  };

  console.log("render");
  return (
    <>
      <h1 className='text-center' style={{ marginTop: "65px" }}>
        Todays News - {capitalize(props.category)}
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalArticles}
        loader={<SpinnerComponent></SpinnerComponent>}
      >
        <div className='container'>
          <div className='row'>
            {articles &&
              articles.map((article) => (
                <div className='col-md-4' key={article.url}>
                  <NewsItemComponent
                    title={article.title}
                    description={article.description}
                    imgUrl={article.urlToImage}
                    newsUrl={article.url}
                    author={article.author}
                    date={article.publishedAt}
                    source={article.source.name}
                  ></NewsItemComponent>
                </div>
              ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

NewsComponent.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "general",
};

NewsComponent.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default NewsComponent;
