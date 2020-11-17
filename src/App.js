import React from "react";
import axios from "axios";
import { newsCategory } from "./news";

import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";
import ResultFound from "./components/ResultFound";
import Loading from "./components/Loading";

const fakeNews = [
  {
    title: "Title1",
    content: "Content",
    url: "https://linktonews.com",
    urlToImage: "https://linktoimage.com",
    publishedAt: "Published Date and Time",
    source: {
      name: "CNN",
    },
  },
  {
    title: "Title2",
    content: "Content",
    url: "https://linktonews.com",
    urlToImage: "https://linktoimage.com",
    publishedAt: "Published Date and Time",
    source: {
      name: "CNN",
    },
  },
];

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header category={newsCategory.technology} />
            <ResultFound />
            <NewsList news={fakeNews} />
            <Pagination />
            <Loading />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
