import React from "react";
import { BrowserRouter, Route, Routes, useSearchParams } from "react-router";

function Child1() {
  const [params] = useSearchParams();
  console.log(params);
  console.log("id", params.get("id"));

  return (
    <div>
      <h3>{params.get("id")}번 게시물 보기</h3>
    </div>
  );
}

function Child2() {
  const [params] = useSearchParams();
  console.log(params);
  console.log("id", params.get("id"));
  return (
    <div>
      <h3>{params.get("id")}회원 정보 보기</h3>
    </div>
  );
}

function App46(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="board/detail" element={<Child1 />}></Route>
          <Route path="member/detail" element={<Child2 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App46;
