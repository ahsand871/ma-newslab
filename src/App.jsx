import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NotFound from "./components/NotFound";
import LoadingBar from "react-top-loading-bar";
import About from "./components/About";

export class App extends Component {
  static propTypes = {};
  constructor() {
    super();
    this.state = {
      articles: [],
      totalArticles: "",
      searchInput: "",
      category: "general",
      page: 1,
      searching: false,
      loading: false,
      notFound: false,
      hasMore: true,
      progress: 0,
      key: "",
      display: "home",
    };
  }

  apiKey = import.meta.env.VITE_API_KEY;

  setPage = (display) => {
    this.setState({ display });
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  updateSearch = ({ searchInput }) => {
    this.setState({ searchInput });
  };

  updateCategory = (category) => {
    this.setState({ category, page: 1, searching: false });
    console.log(category);
    if (category === "general") {
      document.title = "MA NewsLab - Smart News. Clean Experience.";
      return;
    }
    let updatedTitle = category.charAt(0).toUpperCase() + category.slice(1);
    document.title = `MA NewsLab - ${updatedTitle}`;
  };

  handleSearchClick = async () => {
    this.setState({ progress: 15 });
    document.title = `MA NewsLab - ${this.state.searchInput}`;
    let url = `https://gnews.io/api/v4/search?q=${this.state.searchInput}&apikey=${this.apiKey}`;
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(apiUrl)}`;
    this.setState({ loading: true, searching: true });
    let data = await fetch(proxyUrl);
    let parsedData = await data.json();
    if (parsedData.articles.length === 0) {
      this.setState({ loading: false, notFound: true, progress: 100 });
    } else {
      this.setState({
        articles: parsedData.articles,
        totalArticles: parsedData.totalArticles,
        loading: false,
        hasMore: true,
        progress: 100,
      });
    }
  };

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    const url = `https://gnews.io/api/v4/top-headlines?category=${this.state.category}&lang=en&country=pk&max=15&page=${nextPage}&apikey=${this.apiKey}`;
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
    let data = await fetch(proxyUrl);

    let parsedData = await data.json();
    if (this.state.articles.length >= 50) {
      this.setState({
        hasMore: false,
      });
      return;
    }
    if (parsedData.articles.length === 0) {
      this.setState({
        hasMore: false,
      });
    } else {
      this.setState((prevState) => ({
        page: nextPage,
        articles: [...prevState.articles, ...parsedData.articles],
        totalArticles: parsedData.totalResults,
        hasMore: true,
      }));
    }
  };

  news = async () => {
    this.setState({ progress: 15 });
    const url = `https://gnews.io/api/v4/top-headlines?category=${this.state.category}&lang=en&country=pk&max=15&page=1&apikey=${this.apiKey}`;
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
    this.setState({ loading: true });
    let data = await fetch(proxyUrl);
    let parsedData = await data.json();
    if (parsedData.status === "error") {
      this.setState({ loading: false, notFound: true, progress: 100 });
      <NotFound message={parsedData.message} code={parsedData.code} />;
    } else {
      this.setState({
        articles: parsedData.articles,
        totalArticles: parsedData.totalResults,
        key: parsedData.articles.id,
        loading: false,
        hasMore: true,
        progress: 100,
      });
    }
  };

  render() {
    return (
      <>
        <div className="d-flex flex-column justify-content-center main-app">
          <Navbar
            searchInput={this.state.searchInput}
            updateSearch={this.updateSearch}
            category={this.state.category}
            updateCategory={this.updateCategory}
            handleSearchClick={this.handleSearchClick}
            setPage={this.setPage}
            setProgress={this.setProgress}
          />
          <LoadingBar
            height={3}
            color="#4fc3f7"
            progress={this.state.progress}
          />
          {this.state.display === "home" && (
            <News
              apiKey={this.apiKey}
              key={this.state.category}
              searching={this.state.searching}
              searchInput={this.state.searchInput}
              hasMore={this.state.hasMore}
              articles={this.state.articles}
              totalArticles={this.state.totalArticles}
              loading={this.state.loading}
              category={this.state.category}
              updateCategory={this.updateCategory}
              news={this.news}
              fetchMoreData={this.fetchMoreData}
              page={this.state.page}
              updatePage={this.updatePage}
              verifyArticles={this.verifyArticles}
              notFound={this.state.notFound}
            />
          )}
          {this.state.display === "about" && <About />}
        </div>
      </>
    );
  }
}

export default App;
