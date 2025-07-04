import React from "react";
import { Table } from "react-bootstrap";

function MyComp1() {
  const list = ["java", "css", "react", "boot"];
  // key prop : 리스트를 컴포넌트로 그릴 때 각 컴포넌트를 유일하게 식별하는 값
  // 키로 같은 컴포넌트 인지 판단해서 효율적으로
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function MyComp2() {
  const board = [
    { id: 3, title: "게시물 3번 제목", author: "son" },
    { id: 5, title: "게시물 4번 제목", author: "park" },
    { id: 9, title: "게시물 5번 제목", author: "yoon" },
    { id: 14, title: "또 다른 제목", author: "hwon" },
    { id: 21, title: "게시물 7번 제목", author: "cha" },
  ];
  return (
    <div>
      <Table striped={true}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {board.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function App39(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App39;
