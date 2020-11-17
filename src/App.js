import React from "react";
import Header from "./components/Header";
import { newsCategory } from "./news";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header category={newsCategory.technology} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
