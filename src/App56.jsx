import React, { useState } from "react";
import axios from "axios";

function App56(props) {
  const [myFiles, setMyFiles] = useState(null);

  function handleButton1Click() {
    axios.postForm("/api/main31/sub1", {
      name: "흥민",
      age: 77,
      myFiles: myFiles,
    });
  }

  function handleButton2Click() {
    axios.postForm("/api/main31/sub2", {
      address: "신촌",
      score: 5.66,
      yourFiles: myFiles,
    });
  }

  function handleButton3Click() {
    axios.postForm("/api/main31/sub3", {
      city: "서울",
      uploadFiles: myFiles,
    });
  }

  function handleButton4Click() {
    axios.postForm("/api/main31/sub4", {
      id: 33,
      userName: "흥민",
      address: "강남",
      uploadFiles: myFiles,
    });
  }

  function handleButton5Click() {
    axios.postForm("/api/main31/sub5", {
      score: 6.77,
      className: "기린",
      location: "신촌",
      uploads: myFiles,
    });
  }

  return (
    <div>
      <button onClick={() => axios.get("/api/main31/sub7/33")}>id : 33</button>
      <button onClick={() => axios.get("/api/main31/sub7/66")}>id : 66</button>
      <button onClick={() => axios.get("/api/main31/sub7/99")}>id : 99</button>
      <hr />
      <button
        onClick={() => {
          axios.get("/api/main31/sub6/seoul");
        }}
      >
        서울 전송
      </button>
      <button
        onClick={() => {
          axios.get("/api/main31/sub6/jeju");
        }}
      >
        제주 전송
      </button>
      <button
        onClick={() => {
          axios.get("/api/main31/sub6/busan");
        }}
      >
        부산 전송
      </button>

      <hr />
      <div>
        <input
          type="file"
          multiple
          onChange={(e) => setMyFiles(e.target.files)}
        />
        <button onClick={handleButton5Click}>파일 전송 5 여러개</button>
      </div>
      <hr />
      <div>
        <input
          type="file"
          multiple
          onChange={(e) => setMyFiles(e.target.files)}
        />
        <button onClick={handleButton4Click}>파일 전송 4 여러개</button>
      </div>
      <hr />
      <div>
        <input
          type="file"
          multiple
          onChange={(e) => setMyFiles(e.target.files)}
        />
        <button onClick={handleButton3Click}>파일 전송 3 여러ㄱㅐ(연습)</button>
      </div>
      <hr />
      <div>
        <input
          type="file"
          multiple
          onChange={(e) => setMyFiles(e.target.files)}
        />
        <button onClick={handleButton2Click}>파일 전송 2 여러개</button>
      </div>
      <hr />
      <div>
        {/* file은 e.target.files 임 not value*/}
        <input type="file" onChange={(e) => setMyFiles(e.target.files)} />
        <button onClick={handleButton1Click}>파일 전송 1</button>
      </div>
    </div>
  );
}

export default App56;
