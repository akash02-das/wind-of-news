import React from "react";
import moment from "moment";
import "../App.css";
import { newsCategory } from "../news";

class Header extends React.Component {
  state = {
    searchTerm: "",
  };

  searchRef = React.createRef();

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.props.search(this.state.searchTerm);
    }
  };

  componentDidMount() {
    this.searchRef.current.focus();
  }

  render() {
    const { category, changeCategory } = this.props;

    // Current Date
    const m = moment();
    const date = m.format("dddd, MMMM D, YYYY");

    return (
      <div className="my-2">
        <div className="mb-4 p-2 bg-info">
          <h1 className="text-center text-light header-title">
            The Wind Of News
          </h1>
          <p className="text-center">
            {date} | <span className="text-dark ">YOUR RIGHT TO KNOW</span>
          </p>
        </div>
        <input
          ref={this.searchRef}
          type="search"
          className="form-control"
          placeholder="Type Anything & Press Enter To Search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <div className="my-4">
          {newsCategory &&
            Object.keys(newsCategory).map((item) => {
              if (category === newsCategory[item]) {
                return (
                  <button onClick={() => changeCategory(newsCategory[item])} className="btn btn-sm btn-info mr-2 mb-2">
                    {`#${newsCategory[item]}`}
                  </button>
                );
              } else {
                return (
                  <button onClick={() => changeCategory(newsCategory[item])} className="btn btn-sm btn-light mr-2 mb-2">
                    {`#${newsCategory[item]}`}
                  </button>
                );
              }
            })}
        </div>
      </div>
    );
  }
}

export default Header;
