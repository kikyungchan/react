import React from "react";

function App21(props) {
  function handleButtonClick(e) {
    //e :event 객체
    console.log(e);

    //stopPropagation : 이벤트 전달 막기
    e.stopPropagation();
    console.log("버튼 클릭");
  }

  function handleParaClick(e) {
    // console.log(e);

    e.stopPropagation();
    console.log("파라 클릭");
  }

  return (
    <div className="p-5 bg-info" onClick={() => console.log("div 클릭")}>
      <p className="bg-danger" onClick={handleParaClick}>
        Lorem ipsum dolor.
      </p>

      <button onClick={handleButtonClick}>버튼</button>
    </div>
  );
}

export default App21;
