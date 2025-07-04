import React, { useEffect } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
} from "react-router";
import "./assets/mystyle.css";
// /react/learn
// /react/tutorial
// /react/docs
// /react/api

function ReactLayout() {
  useEffect(() => {
    console.log("ReactLayout 컴포넌트 마운트 됨");
  }, []);
  return (
    <div>
      {/* 전체 페이지를 다시 마운트 하지 않으려면 a태그 대신 react router 의
      Link 컴포넌트 사용*/}
      {/*나브링크 : 현재 경로와 to prop의 값이 같으면 액티브클래스 추가*/}
      <div className="d-flex justify-content-around">
        <div>NAVBAR</div>
        <div>
          <NavLink to="/react/learn">LEARN</NavLink>
        </div>
        <div>
          <NavLink to="/react/tutorial">TUTORIAL</NavLink>
        </div>
        <div>
          <NavLink to="/react/docs">DOCS</NavLink>
        </div>
        <div>
          <NavLink to="/react/api">API</NavLink>
        </div>
      </div>
      {/*자식 경로의 컴포넌트가 출력되는 곳*/}
      <Outlet></Outlet>
    </div>
  );
}

function App48(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="react" element={<ReactLayout />}>
            <Route
              path="learn"
              element={
                <div>
                  <h3>LEARN 화면</h3>
                </div>
              }
            />
            <Route
              path="tutorial"
              element={
                <div>
                  <h3>TUTORIAL 화면</h3>
                </div>
              }
            />
            <Route
              path="docs"
              element={
                <div>
                  <h3>DOCS 화면</h3>
                </div>
              }
            />
            <Route
              path="api"
              element={
                <div>
                  <h3>API 화면</h3>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App48;
