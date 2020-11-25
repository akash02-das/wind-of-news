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
    isLoading: true,
  };

  foundResult = React.createRef();

  componentDidMount() {
    news
      .getNews()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Something went wrong");
        this.setState({ isLoading: false });
      });
  }

  goToTop = () => {
    window.scroll(0, this.foundResult.current.scrollTop);
  };

  next = () => {
    if (this.state.data.isNext) {
      this.setState({ isLoading: true });
    }

    news
      .next()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Something went wrong");
        this.setState({ isLoading: false });
      });
  };

  prev = () => {
    if (this.state.data.isPrev) {
      this.setState({ isLoading: true });
    }

    news
      .prev()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Something went wrong");
        this.setState({ isLoading: false });
      });
  };

  handlePageChange = (value) => {
    this.setState({
      data: {
        ...this.state.data,
        currentPage: Number.parseInt(value),
      },
    });
  };

  gotoPage = () => {
    this.setState({ isLoading: true });
    news
      .setCurrentPage(this.state.data.currentPage)
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Something went wrong");
        this.setState({ isLoading: false });
      });
  };

  changeCategory = (category) => {
    this.setState({ isLoading: true });
    news
      .changeCategory(category)
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Something went wrong");
        this.setState({ isLoading: false });
      });
  };

  search = (searchTerm) => {
    this.setState({ isLoading: true });
    news
      .search(searchTerm)
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Something went wrong");
        this.setState({ isLoading: false });
      });
  };

  render() {
    const {
      article,
      isNext,
      isPrev,
      category,
      totalPage,
      currentPage,
      totalResults,
    } = this.state.data;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header
              category={category}
              changeCategory={this.changeCategory}
              search={this.search}
            />
            <div ref={this.foundResult}>
              <ResultFound
                results={totalResults}
                currentPage={currentPage}
                totalPage={totalPage}
              />
            </div>
            {this.state.isLoading ? (
              <Loading />
            ) : (
              <div>
                <NewsList news={article} />
                <Pagination
                  next={this.next}
                  prev={this.prev}
                  isNext={isNext}
                  isPrev={isPrev}
                  totalPage={totalPage}
                  currentPage={currentPage}
                  handlePageChange={this.handlePageChange}
                  gotoPage={this.gotoPage}
                />
                <button
                  onClick={this.goToTop}
                  className="btn btn-secondary my-4 float-right"
                >
                  Go To Top
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
