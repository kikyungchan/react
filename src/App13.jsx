// import 가져오기
// 네임드 익스포트는 이름을 명시해서 임포트
// 중복을 피하기 위해 as로 별칭 주기 가능
import { myAddress as myAddress1, MyAwesomeButton } from "./App12";
import { myAddress as yourAddress } from "./App11";

// 디폴트 익스포트 한 값은 아무이름으로 임포트 해도됌
import App12 from "./App12.jsx";

function App13() {
  return (
    <>
      <h3>13번 파일</h3>
      <MyAwesomeButton color={"skyblue"}>저장</MyAwesomeButton>
      <hr />
      {myAddress1}, {yourAddress}
      <hr />
      <App12 />
    </>
  );
}

export default App13;
