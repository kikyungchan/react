import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

function App44(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="learn">
            <Route index element={<h3>웹앱 배우기</h3>}></Route>
            <Route path="react" element={<h3>리액트 배우기</h3>}></Route>
            <Route path="spring" element={<h3>스프링 배우기</h3>}></Route>
            <Route path="java">
              <Route index element={<h3>자바 배우기</h3>} />
              <Route
                path="collection"
                element={<h3>java collection 배우기 </h3>}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App44;
