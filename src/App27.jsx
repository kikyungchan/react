import React, { useState } from "react";

function MyComp1() {
  // 상태 작성시 주의해야 할 점
  // 불필요하게 상태를 남용하지 말 것
  const [number, setNumber] = useState(1);
  const [oddEven, setOddEven] = useState("홀수");

  function handleButtonClick() {
    setNumber(number + 1);
    if (oddEven == "홀수") {
      setOddEven("짝수");
    } else {
      setOddEven("홀수");
    }
  }

  return (
    <div>
      <div>
        <span>{number}</span>
        <span>{oddEven}</span>
      </div>
      <button onClick={handleButtonClick}>증가</button>
    </div>
  );
}

function MyComp2() {
  const [number, setNumber] = useState(1);

  let oddEven = number % 2 == 0 ? "짝수" : "홀수";

  function handleButtonClick() {
    setNumber(number + 1);
  }

  return (
    <div>
      <div>
        <span>{number}</span>
        <span>{oddEven}</span>
      </div>
      <button onClick={handleButtonClick}>증가</button>
    </div>
  );
}

function MyComp3() {
  const [text, setText] = useState("");
  // const [length, setLength] = useState(0);
  let length = text.length;
  function handleInputChange(e) {
    setText(e.target.value);
    // setLength(e.target.value.length);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>{length}</p>
    </div>
  );
}

function App27() {
  return (
    <div>
      <MyComp3 />
      <hr />
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App27;
