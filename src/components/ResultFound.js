import React from "react";


function ResultFound({results, currentPage, totalPage}) {
  return (
    <div className="d-flex">
      <p className="text-black-50">About {results} results found</p>
      <p className="text-black-50 ml-auto">
        {currentPage} page of {totalPage}
      </p>
    </div>
  );
}

export default ResultFound;
