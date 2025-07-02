import React, { useState } from "react";

function MyComp1() {
  const [text, setText] = useState("기본 값");

  function handleInputChange(e) {
    console.log(e.target.value);
    // setText("다른 값");
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
    </div>
  );
}

function MyComp2() {
  const [text, setText] = useState("기본값이요");
  // 연습
  // input 값이 입력되도록
  function handleResetButton() {
    setText("");
  }

  function handleInputChange(e) {
    setText(e.target.value);
  }

  // 리셋 버튼 클릭 시 input의 value가 "" 되도록
  return (
    <div>
      <input onChange={handleInputChange} type="text" value={text} />
      <button onClick={handleResetButton}>리셋</button>
    </div>
  );
}

function App25() {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App25;
