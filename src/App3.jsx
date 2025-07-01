// 처음 만드는 component
// component : 함수
// conponent명 (함수명) : UpperCamelCase
function MyAwesomeButton() {
  // 함수 코드들

  // return 에 : dom에 그려야할 코드 작성

  return (
    <button
      style={{
        backgroundColor: "red",
        color: "green",
        padding: "10px",
        border: "2px solid yellow",
      }}
    >
      너무 잘 만든 버튼
    </button>
  );
}

//MyNewHeader 컴포넌트 만들기
function MyNewHeader() {
  return (
    //
    <h1
      style={{
        color: "skyblue",
        padding: "10px",
        border: "2px solid yellow",
      }}
    >
      내가 만든 해더
      {/*  내가만든주석
    ㅋ ㅇ ㅎ*/}
    </h1>
  );
}

function App3() {
  return (
    <>
      {/*h1>lorem3^p>lorem^button*2>lorem1*/}
      <h1>Lorem ipsum dolor.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
        cumque doloremque explicabo hic laborum modi nemo optio perferendis,
        quis vitae. Distinctio ex illum odit quae quibusdam repellat temporibus
        veritatis voluptatibus.
      </p>
      <button>Lorem.</button>
      <button>Omnis.</button>
      <hr />
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "1px solid yello",
          padding: "10px",
        }}
      >
        너무 잘 만든 버튼
      </button>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "1px solid yello",
          padding: "10px",
        }}
      >
        너무 잘 만든 버튼
      </button>
      <MyAwesomeButton />
      <MyAwesomeButton />
      <MyNewHeader />
      <MyNewHeader />
    </>
  );
}

export default App3;
