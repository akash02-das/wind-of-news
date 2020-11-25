import React from "react";


const ResultFound = React.forwardRef(({results, currentPage, totalPage},ref) => {
  return (
    <div ref={ref} className="d-flex">
      <p className="text-black-50">About {results} results found</p>
      <p className="text-black-50 ml-auto">
        {currentPage} page of {totalPage}
      </p>
    </div>
  );
});

export default ResultFound;
