import React from "react";
import axios from "axios";
import News, { newsCategory } from "./news";

import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";
import ResultFound from "./components/ResultFound";
import Loading from "./components/Loading";

class App extends React.Component {
  state = {
    news: [],
    category: newsCategory.technology,
  };

  changeCategory = (category) => {
    this.setState({ category });
  };

  componentDidMount() {
    // const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}`;
    // axios
    //   .get(url)
    //   .then((response) => {
    //     this.setState({
    //       news: response.data.articles,
    //     });
    //   })
    //   .catch((e) => console.log(e));

    const news = new News(newsCategory.technology);
    news.getNews().then(data => {
      console.log(data);
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.category !== this.state.category) {
    //   const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}`;
    //   axios
    //     .get(url)
    //     .then((response) => {
    //       this.setState({
    //         news: response.data.articles,
    //       });
    //     })
    //     .catch((e) => console.log(e));
    // }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header
              category={this.state.category}
              changeCategory={this.changeCategory}
            />
            <ResultFound />
            <NewsList news={this.state.news} />
            <Pagination />
            <Loading />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
