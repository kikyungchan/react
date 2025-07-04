import React, { useEffect, useState } from "react";
import { FormCheck } from "react-bootstrap";

function MyComp1({ value }) {
  return <div className="border">value*2:{value * 2}</div>;
}

let someValue = 0;

function MyComp2() {
  someValue = someValue + 1;
  return <div className="border bg-light">someValue : {someValue}</div>;
}

function MyComp3() {
  useEffect(() => {
    console.log("마ㅣ운트됌");
    return () => {
      console.log("ㅇ너마운트됨");
    };
  }, []);
  return (
    <div>
      <h3>my comp3</h3>
    </div>
  );
}

function Child41() {
  useEffect(() => {
    console.log("child41 mount");
    return () => {
      console.log("child41 unmount");
    };
  }, []);
  return (
    <div>
      <h3>child41 component</h3>
    </div>
  );
}

function MyComp4() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <FormCheck type="switch" checked={show} onClick={() => setShow(!show)} />
      {show && <Child41 />}
    </div>
  );
}

function App38(props) {
  // strict mode : 모든 컴포넌트를 마운트,언마운트,마운트
  return (
    <div>
      <MyComp4 />
      <hr />
      <MyComp3 />
      <hr />
      <MyComp2 />
      <MyComp2 />
      <MyComp2 />
      <hr />
      <MyComp1 value={1} />
      <MyComp1 value={2} />
    </div>
  );
}

export default App38;
