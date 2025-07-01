function MyAwesomeButton({ color, children }) {
  return (
    <button
      style={{
        color: color,
        backgroundColor: "red",
        padding: "10px",
        borderRadius: "10px",
        border: "2px solid green",
        fontSize: "2rem",
      }}
    >
      {children}
    </button>
  );
}

function App12() {
  return (
    <>
      <MyAwesomeButton>등록</MyAwesomeButton>
      <hr />
      <MyAwesomeButton color={"blue"}>저장</MyAwesomeButton>
      <hr />
      <MyAwesomeButton color={"yellow"}>수정</MyAwesomeButton>
    </>
  );
}

const myAddress = "seoul";
// 현재 파일의 (변수, 값, 함수 등등)을 내보내기
export { MyAwesomeButton, myAddress };

export default App12;
