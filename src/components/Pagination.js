import React from "react";

export class Pagination extends React.Component {
  state = {
    isEditable: false,
  };

  render() {
    return (
      <div className="d-flex align-items-center my-5">
        <button className="btn btn-info">Prev</button>
        <div className="flex-grow-1 text-center">
          {this.state.isEditable ? (
            <input type="number" value="1" />
          ) : (
            <p
              style={{ userSelect: "none", lineHeight: "1.1" }}
              title="Double tap to jump page"
              onDoubleClick={() => {
                this.setState({ isEditable: !this.state.isEditable });
              }}
            >
              {1} of {100}
              <br />
              <small>Double Tap to Edit</small>
            </p>
          )}
        </div>
        <button className="btn btn-info">Next</button>
      </div>
    );
  }
}

export default Pagination;
