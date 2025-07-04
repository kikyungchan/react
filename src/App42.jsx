import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

function Learn() {
  return (
    <div>
      <h3>리액트 배우기</h3>
    </div>
  );
}

function Tutorial() {
  return (
    <div>
      <h3>리액트 공부하기</h3>
    </div>
  );
}

function Install() {
  return (
    <div>
      <h3>리액트 설치하기</h3>
    </div>
  );
}

function Reference() {
  return (
    <div>
      <h3>리액트 참고문서</h3>
    </div>
  );
}

function App42(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="learn" element={<Learn />}></Route>
          <Route path="tutorial" element={<Tutorial />}></Route>
          <Route path="install" element={<Install />}></Route>
          <Route path="reference/react" element={<Reference />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App42;
