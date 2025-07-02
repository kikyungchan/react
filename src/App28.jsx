import React, { useState } from "react";

function MyComp1() {
  // use... : 훅(hook)
  // react 는 훅의 사용을 순서로 기억함
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  const [name, setName] = useState("son");

  // 따라서
  // 1. use...(훅)을 조건절에 넣으면 안됨
  // 반복문에 넣으면 안됨
  // 안전하게 컴포넌트 코드 상위에 순서대로 작성할 것
  if (true) {
    const [message, setMessage] = useState("");
  }

  const [alert, setAlert] = useState("");

  return null;
}

function App28(props) {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App28;
