import React, { useState } from "react";

function MyComp1() {
  let count = 1;

  function handleButtonClick() {
    count++;
    console.log("버튼클릭", count);
  }

  return (
    <div>
      {count}
      <br />
      <button onClick={handleButtonClick}>count 증가</button>
    </div>
  );
}

function MyComp2() {
  // 컴포넌트 처음 그려진(렌더링) 이후
  // 상태(state)가 변경되어야 다시 그려짐(리렌더)

  // 상태는 react가 관리하는 값
  // 컴포넌트 는 useState로 상태를 얻고 업데이트 가능
  // useState : 초기값을 받고, 현재 상태와 , 상태를 업데이트 할 수 있는 메소드[1]를 배열로 리턴
  const arr = useState(1);
  let count = arr[0]; // 현재상태
  let setCount = arr[1]; // 상태를 업데이트 하는 메소드

  function handleButtonClick() {
    // 상태 변경할 떄 useState 에서 받은 값의[1]인덱스에 있는 함수를 사용해야함
    setCount(count + 1); // 상태변경됨 => 리랜더
    count++;
    console.log("버튼 클릭됨", count);
  }

  return (
    <div>
      {count}
      <br />
      <button onClick={handleButtonClick}>count 증가</button>
    </div>
  );
}

function MyComp3() {
  // const count = arr[0]; // 현재상태
  // const setCount = arr[1]; // 상태를 업데이트 메소드

  const [count, setCount] = useState(1);

  function handleButtonClick() {
    setCount(count + 1);
  }

  return (
    <div>
      {count}
      <button onClick={handleButtonClick}>세번째 버튼</button>
    </div>
  );
}

function MyComp4() {
  const [message, setMessage] = useState("첫번째 메세지");

  // 1번 클릭시 message = 첫번째메세지
  function handleFistButtonClick() {
    setMessage("첫번째 메세지");
  }

  // 2번 클릭시 message = 두번째
  function handleSecondButtonClick() {
    setMessage("두번째 메세지");
  }

  return (
    <div>
      {message}
      <br />
      <button onClick={handleFistButtonClick}>1번</button>
      <button onClick={handleSecondButtonClick}>2번</button>
    </div>
  );
}

function MyComp5() {
  const [color, setColor] = useState("black");

  return (
    <div style={{ backgroundColor: color, padding: "20px" }}>
      <button onClick={() => setColor("red")}>빨강</button>
      <button onClick={() => setColor("yellow")}>노랑</button>
      <button onClick={() => setColor("blue")}>파랑</button>
    </div>
  );
}

function MyComp() {
  return null;
}

function MyComp6() {
  const [animal, setAnimal] = useState("/public/bear.jpg");
  return (
    <div>
      <img className="w-100" src={animal} alt="" />
      <br />
      <button onClick={() => setAnimal("/public/bear.jpg")}>곰</button>
      <button onClick={() => setAnimal("/public/bull.jpg")}>황소</button>
      <button onClick={() => setAnimal("/public/eagle.jpg")}>독수리</button>
    </div>
  );
}

function MyComp7() {
  // 다음버튼 클릭시 독수리 벌 곰으로
  const image = ["/public/bear.jpg", "/public/bull.jpg", "/public/eagle.jpg"];
  const [index, setIndex] = useState(0);

  function handleNext() {
    setIndex((prevIndex) => (prevIndex + 1) % image.length);
  }

  function handlePrev() {
    let prevIndex = index - 1;
    if (prevIndex < 0) {
      prevIndex = image.length - 1;
    }
    setIndex(prevIndex);
  }

  return (
    <div>
      <img className="w-100" src={image[index]} alt="" />
      <br />
      <button onClick={handlePrev}>이전</button>
      <button onClick={handleNext}>다음</button>
    </div>
  );
}

function App23() {
  return (
    <div>
      <MyComp7 />
      <hr />
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

export default App23;
