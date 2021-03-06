import React from "react";

export class Pagination extends React.Component {
  state = {
    isEditable: false,
  };

  render() {
    const {next, prev, isNext, isPrev, currentPage, totalPage, handlePageChange, gotoPage} = this.props
    return (
      <div className="d-flex align-items-center my-5">
        <button className="btn btn-info" disabled={!isPrev} onClick={() => {
          prev();
        }} >Prev</button>
        <div className="flex-grow-1 text-center">
          {this.state.isEditable ? (
            <input 
              type="number" 
              value={currentPage} 
              onChange={(e) => handlePageChange(e.target.value)} 
              onKeyPress={(e) => {
                if(e.key === 'Enter') {
                  gotoPage();
                  this.setState({isEditable: false})
                }
              }}
            />
          ) : (
            <p
              style={{ userSelect: "none", lineHeight: "1.1" }}
              title="Double tap to jump page"
              onDoubleClick={() => {
                this.setState({ isEditable: !this.state.isEditable });
              }}
            >
              {currentPage} of {totalPage}
              <br />
              <small>Double Tap to Edit</small>
            </p>
          )}
        </div>
        <button className="btn btn-info" disabled={!isNext} onClick={() => {
          next();
        }} >Next</button>
      </div>
    );
  }
}

export default Pagination;
