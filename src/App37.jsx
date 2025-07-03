import React, { useEffect, useState } from "react";
import { FormCheck } from "react-bootstrap";

function Child11() {
  const [count, setCount] = useState(0);
  // useEffect : 컴포넌트 생애 주기(lifecycle)별 실행되는 코드 작성 가능한 훅(hook)

  useEffect(() => {
    // initial-render(mount)
    console.log("첫 렌더링시 실행 (mount 시 실행)");

    // unmount 때 실행되는 코드
    // : useEffect의 첫번째 파라미터로 들어가는 함수의 리턴되는 함수로
    return () => {
      console.log("언마운트때 실행되는 코드들....");
    };
  }, []);

  console.log("차일드 함수 실행됨");

  return (
    <div>
      <h3>자식 컴포넌트</h3>
      <button onClick={() => setCount(count + 1)}>증가 {count}</button>
    </div>
  );
}

function MyComp1() {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <FormCheck
        type="switch"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {checked && <Child11 />}
    </div>
  );
}

function Child21() {
  // 연습 :
  // 이 컴포넌트가 마운트 될 때 로그로 "자식21 마운트됨" 출력
  // 이 컴포넌트가 언마운트 될 때 로그로 "자식21 언마운트됨" 출력
  useEffect(() => {
    // mount 시
    console.log("자식21 마운트 됨");
    return () => {
      //unmount 시
      console.log("또다른 언마운트시 실행 코드");
    };
  }, []);

  // useEffect 여러 개 사용 가능
  useEffect(() => {
    // mount 시
    console.log("또다른 mount 때 실행되는 코드");
    return () => {
      // unmount 시
      console.log("자식21 언마운트 됨");
    };
  }, []);

  return (
    <div>
      <h3>자식 21</h3>
    </div>
  );
}

function MyComp2() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <FormCheck type="switch" checked={show} onChange={() => setShow(!show)} />
      {show && <Child21 />}
    </div>
  );
}

function Child31() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // useEffect 의 두번째 파라미터 : dependencies
  // 변경 감지할 값들의 목록
  // 이 목록의 값이 변경되면 useEffect의 첫번째 파라미터(함수) 실행
  useEffect(() => {
    //이 위치의 코드는 마운트시,업데이트시 실행이됨.
    console.log("count가 업데이트 되면 실행되는 함수의 코드들....");
  }, [count]);

  useEffect(() => {
    console.log("마운트될 때만 실행되는 코드");
  }, []);

  useEffect(() => {
    console.log("otherCount가 업데이트되면 실행되는 코드");
  }, [otherCount]);

  useEffect(() => {
    console.log("count/otherCount 가 업데이트되면 실행되는 코드");
  }, [count, otherCount]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>카운트{count}</button>
      <button onClick={() => setOtherCount(otherCount + 1)}>
        또 다른 카운트 {otherCount}
      </button>
    </div>
  );
}

function MyComp3() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <FormCheck type="switch" checked={show} onChange={() => setShow(!show)} />
      {show && <Child31 />}
    </div>
  );
}

function Child41() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("마운트됨");
    return () => {
      console.log("언마운트됨");
    };
  }, []);

  useEffect(() => {
    if (count !== 0) {
      console.log("count 업데이트됨");
    }
  }, [count]);
  // 1. 마운트 될 때 "마운트됨"
  // 2. 언마운트 될 때 "언마운트됨"
  // 3. count가 업데이트 될 때 "count 업데이트됨"
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>카운트{count}</button>
    </div>
  );
}

function MyComp4() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <FormCheck type="switch" checked={show} onChange={() => setShow(!show)} />
      {show && <Child41 />}
    </div>
  );
}

function App37(props) {
  return (
    <div>
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

export default App37;
