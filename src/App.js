import React from "react";
import News, { newsCategory } from "./news";

import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";
import ResultFound from "./components/ResultFound";
import Loading from "./components/Loading";

const news = new News(newsCategory.technology);

class App extends React.Component {
  state = {
    data: {},
    isLoading: true
  };

  componentDidMount() {
    news.getNews()
      .then(data => {
        this.setState({data, isLoading: false})
      })
      .catch(e => {
        console.log(e);
        alert("Something went wrong");
        this.setState({isLoading: false})
      })
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
            {this.state.isLoading ? (
              <Loading />
            ) : (
              <NewsList news={this.state.data.article} />
            )}
            <Pagination />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
