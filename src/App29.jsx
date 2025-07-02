import { useState } from "react";

function MyComp1() {
  const arr = ["java", "react", "css"];

  return (
    <div>
      {arr.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

function MyComp2() {
  const datas = [9, 5, 1, 0];

  return (
    <div>
      {/*  datas 를 활용해서*/}
      {/*
  ul
   li 9
   li 5
   li 1
   li 0
   /ul
   */}
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function MyComp3() {
  const [datas, setDatas] = useState(["java", "react", "spring"]);

  function handleButtonClick() {
    datas.push("boot");
    console.log(datas);
    // react는 배열을 참조값 비교로 상태가 변경되었는 지 확인
    // 따라서 이전 상태 배열을 복사한 새 배열을 상태변경시 사용해야 함
    setDatas(datas);
  }

  console.log("상태변경됨ㅇ");

  return (
    <div>
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={handleButtonClick}>추가</button>
    </div>
  );
}

function MyComp4() {
  function handleButtonClick() {
    const nextDatas = [...datas, "boot"];
    // react는 배열을 참조값 비교로 상태가 변경되었는 지 확인
    // 따라서 이전 상태 배열을 복사한 새 배열을 상태변경시 사용해야 함
    setDatas(nextDatas);
  }

  console.log("상태 변경됨");

  const [datas, setDatas] = useState(["java", "react", "spring"]);
  return (
    <div>
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={handleButtonClick}>추가</button>
    </div>
  );
}

function MyComp5() {
  const [list, setList] = useState(["곰", "독수리", "벌"]);

  function handleAddBearButton() {
    setList([...list, "곰"]);
  }

  function handleAddEagleButton() {
    setList([...list, "독수리"]);
  }

  function handleAddBeeButton() {
    setList([...list, "벌"]);
  }

  function handleDeleteButton() {
    const nextList = [...list];
    nextList.pop();
    setList(nextList.pop);
  }

  return (
    <div>
      <button onClick={handleAddBearButton}>곰 추가</button>
      <button onClick={handleAddEagleButton}>독수리 추가</button>
      <button onClick={handleAddBeeButton}>벌 추가</button>
      <button onClick={handleDeleteButton}>마지막 요소 지우기</button>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function MyComp6() {
  const [datas, setDatas] = useState(["java", "react", "spring"]);
  const [input, setInput] = useState("");

  function handleAddList() {
    const nextList = [...datas, input];
    setDatas(nextList);
    setInput("");
  }

  function handleInputChane(e) {
    setInput(e.target.value);
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      handleAddList();
    }
  }

  return (
    <div>
      <input
        onKeyDown={handleEnter}
        onChange={handleInputChane}
        type="text"
        value={input}
      />
      <button onClick={handleAddList}>추가</button>
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App29() {
  return (
    <div>
      <MyComp6 />
      <hr />
      <MyComp5 />
      <hr />
      <MyComp4 />
      <hr />
      <MyComp3 />
      <hr />
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App29;
