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

// 연습 : 아래 경로에 같은 sidebar가 존재하도록 코드 작성

// /react/install
// /react/game
// /react/state

function ReactComponent() {
  return (
    <div className="d-flex gap-3 p-5">
      <div className="w-25 bg-body-tertiary">
        <div>
          <NavLink to="/react/install">인스톨</NavLink>
        </div>
        <div>
          <NavLink to="/react/game">게임</NavLink>
        </div>
        <div>
          <NavLink to="/react/state">상태</NavLink>
        </div>
      </div>
      <div className="flex-1 bg-primary-subtle">
        <Outlet />
      </div>
    </div>
  );
}

function App49(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="react" element={<ReactComponent />}>
            <Route
              path="install"
              element={
                <div>
                  <h3>설치 방법</h3>
                </div>
              }
            />
            <Route
              path="game"
              element={
                <div>
                  <h3>게임 만들기</h3>
                </div>
              }
            />
            <Route
              path="state"
              element={
                <div>
                  <h3>상태란 무엇인가?</h3>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App49;
