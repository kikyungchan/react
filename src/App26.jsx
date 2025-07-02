import React, { useState } from "react";

function MyComp1() {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(10);

  console.log(number1, number2);

  return (
    <div>
      {/*div*2>div+button*/}
      <div>
        <div>{number1}</div>
        <button onClick={() => setNumber1(number1 + 1)}>버튼1</button>
      </div>
      <div>
        <div>{number2}</div>
        <button onClick={() => setNumber2(number2 - 1)}>버튼2</button>
      </div>
    </div>
  );
}

function MyComp2() {
  const [text1, setText1] = useState("위");
  const [text2, setText2] = useState("아래");

  function handleTextInputChange1(e) {
    setText1(e.target.value);
    console.log(e.target.value);
  }

  function handleTextInputChange2(e) {
    setText2(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      {/*div*2>input[value=""]*/}
      <div>
        <input onChange={handleTextInputChange1} type="text" value={text1} />
        <button onClick={() => setText1("")}>리셋1</button>
      </div>
      <div>
        <input onChange={handleTextInputChange2} type="text" value={text2} />
        <button onClick={() => setText2("")}>리셋2</button>
      </div>
    </div>
  );
}

function App26() {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App26;
