import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useSearchParams } from "react-router";

function Child1() {
  const [keyword, setKeyword] = useState("");
  const [params, setSearchParams] = useSearchParams();

  function handleSearchClick() {
    setSearchParams({ keyword: keyword });
  }

  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function handlePageButtonClick(num) {
    console.log(num + "로 이동");
    const nextSearchParams = new URLSearchParams(params);
    nextSearchParams.set("page", num);
    setSearchParams(nextSearchParams);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="검색어"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearchClick}>검색</button>
      <hr />
      <div className="d-flex justify-content-between">
        {pageNumbers.map((num) => (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => handlePageButtonClick(num)}
            key={num}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

function Child2() {
  const [keyword, setKeyword] = useState("");
  const [params, setSearchParams] = useSearchParams();

  function handleSearchClick() {
    setSearchParams({ keyword: keyword });
  }

  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function handlePageButtonClick(num) {
    console.log(num + "로 이동");
    const nextSearchParams = new URLSearchParams(params);
    nextSearchParams.set("page", num);
    setSearchParams(nextSearchParams);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="검색어"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearchClick}>검색</button>
      <hr />
      <div className="d-flex justify-content-between">
        {pageNumbers.map((num) => (
          <div
            style={{ cursor: "pointer" }}
            key={num}
            onClick={() => handlePageButtonClick(num)}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

function App47(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/board/list" element={<Child1 />} />
          <Route path="/member/list" element={<Child2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App47;
