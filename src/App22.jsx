import React from "react";

function App22(props) {
  return (
    <div>
      {/*연습 : onSubmit 이벤트 발생시 브라우저 기본 동작을 멈추고*/}
      {/*콘솔에 메세지 출력*/}
      <form
        onSubmit={handleSearchClick}
        action="https://search.naver.com/search.naver"
      >
        <input type="text" name="query" />
        <button>검색</button>
      </form>

      <button onClick={() => console.log("버튼 클릭됨")}>버튼</button>
      <a href="https://www.google.com" onClick={handleLinkClick}>
        구글로
      </a>
    </div>
  );

  function handleSearchClick(e) {
    e.preventDefault();
    console.log("네이버로 못감");
  }

  function handleLinkClick(e) {
    // e.preventDefault(); : 브라우저 기본 동작을 막는 메소드
    e.preventDefault();
    console.log("구글로 못감");
  }
}

export default App22;
