import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router";

function Child1() {
  return (
    <div>
      <h3>나의 서브패스</h3>
    </div>
  );
}

function Child2() {
  // const params = useParams();
  const { content } = useParams();

  return (
    <div>
      <h3>{content}배우기</h3>
    </div>
  );
}

function App45(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="learn">
            <Route path=":mySubPath" element={<Child1 />}></Route>
          </Route>
          <Route path="java">
            <Route path=":content" element={<Child2 />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App45;
