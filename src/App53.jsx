import React from "react";
import axios from "axios";

function App53(props) {
  function handleButton1Click() {
    axios.request({
      method: "get",
      url: "http://localhost:8080/main1/sub1",
    });
  }

  function handleButton2Click() {
    axios.request({
      method: "get",
      url: "/api/main28/sub1",
    });
  }

  function handleButton3Click() {
    axios.request({
      method: "post",
      url: "/api/main28/sub2",
    });
  }

  function hamdleButton4Click() {
    axios.request({
      method: "get",
      url: "/api/main28/sub3",
    });
  }

  function handleButton5Click() {
    axios.request({
      method: "post",
      url: "/api/main28/sub4",
    });
  }

  return (
    <div>
      {/* 연습 : 버튼4 클릭시 get방식 /api/main28/sub3 으로 요청*/}
      {/* 연습 : 버튼5 클릭시 post방식 /api/main28/sub4 으로 요청*/}
      {/* 각각의 버튼 서버에서 요청받는 method*/}
      <button onClick={handleButton5Click}>요청 보냄5</button>
      <hr />
      <button onClick={hamdleButton4Click}>요청 보냄4</button>
      <hr />
      <button onClick={handleButton3Click}>요청 보내기 3</button>
      <hr />
      <button onClick={handleButton2Click}>요청 보내기 2</button>
      <hr />
      <button onClick={handleButton1Click}>요청 보내기 1</button>
    </div>
  );
}

export default App53;
