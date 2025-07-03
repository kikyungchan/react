import React, { useState } from "react";
import { Form } from "react-bootstrap";

function Childcomp11() {
  const [count, setCount] = useState(1);

  return (
    <div className="border bg-info">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

function MyComp1() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <div>
      <Form.Check
        type="switch"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {checked && <Childcomp11 />}

      <hr />

      <Form.Check
        type="switch"
        checked={checked2}
        onChange={() => setChecked2(!checked2)}
      />
      {checked2 && <ChildComp11 />}
    </div>
  );
}
// component의 lifecycle :
// 컴포넌트 트리에 붙을 때 ( 이니셜 렌더)
// 리 렌더 : 상태가 변경될 때
// 트리에서 떨어져 나갈때

// useEffect : 컴포넌트의 라이프사이클에 맞춰 실행시킬 수 있는 메소드를 가짐.
function App36(props) {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App36;
