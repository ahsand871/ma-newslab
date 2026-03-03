import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import NotFound from "./NotFound";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static propTypes = {};

  async componentDidUpdate(props) {
    if (props.category !== this.props.category) {
      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.pagesize}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        articles: parsedData.articles,
        totalArticles: parsedData.totalResults,
        loading: false,
        page: 1,
      });
    }
  }

  async componentDidMount() {
    this.props.news();
  }




  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    let {
      articles = [],
      loading,
      category,
      searching,
      searchInput,
      notFound,
      fetchMoreData,
      hasMore
    } = this.props;
    return (
      <>
          
          <h2 className="h3 my-3 mb-10 d-flex justify-content-center sticky-top" > 
            MA NewsLab -{" "}
            {searching
              ? this.capitalize(searchInput)
              : this.capitalize(category)}{" "}
            Headlines Today
            
          </h2>

          {notFound ? (
            <NotFound />
          ) : (
            
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<Spinner />}
                    >
            <div className="container my-1 d-flex flex-column z-1">
            <div className="row" style={{ display: loading ? "none" : "flex" }}>  
              {articles.map((element) => {
                return (
                  
                  <div className="col-md-4 my-2" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 55) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 80)
                          : "To be continued"
                      }
                      newsUrl={element.url}
                      imageUrl={element.urlToImage}
                      publishedAt={
                        element.publishedAt
                          ? new Date(element.publishedAt).toGMTString()
                          : ""
                      }
                      source={
                        element.source.name ? element.source.name : "unknown"
                      }
                      author={element.author ? element.author : "unknown"}
                    />
                  </div>

                );
              })}
              </div>
            </div>
            
            </InfiniteScroll>
            
          )}
      </>
    );
  }
}

export default News;
