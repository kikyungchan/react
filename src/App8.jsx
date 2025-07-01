function MyComp1({ name = "son", age = 44, city = "london" }) {
  //{} : jsx 내에서 js 코드 작성하는 부분
  return (
    <>
      <ul>
        <li>이름 : {name}</li>
        <li>나이 : {age * 22}</li>
        <li>도시 : {city}</li>
      </ul>
    </>
  );
}

function MyComp2({ score, name }) {
  return (
    <>
      <p>
        이름은 {name} 이고 점수는 {score}점 입니다
      </p>
    </>
  );
}

function App8() {
  return (
    <>
      <MyComp1 />
      <MyComp1 name={"lee"} />
      <MyComp1 name={"kim"} age={55} />
      <MyComp1 name={"park"} age={66} city={"busan"} />
      {/*  연습: p요소로 이름은 홍길동이고 점수는xx점 입니다 */}
      <MyComp2 score={98} name={"호일동"} />
      <MyComp2 score={88} name={"장길산"} />
      <MyComp2 score={77} name={"임꺾쩡"} />
    </>
  );
}

export default App8;
