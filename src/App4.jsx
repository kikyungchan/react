function MyComp1() {
  return <h1>Hello React</h1>;
}

// 이름은 UpperCamelCase
// return 에 그려야할 html 코드 작성
// 가장 상위 요소가 하나인 것만 그려야함
function MyComp2() {
  return <p>My p Element</p>;
}

function MyComp3() {
  return (
    <h2>
      <span>안녕</span>
      <span>컴포넌트</span>
      <button>
        <span>버튼 문구</span>
      </button>
      {/*  가장 상위 요소 (h2 ) 하나*/}
    </h2>
  );
}

function MyComp4() {
  return (
    <div>
      <div>hello</div>
      <div>COMP4</div>
    </div>
  );
}

function MyComp5() {
  // 가장 바깥 요소가 필요 없을 때 <></> 사용
  // fragment : <></>
  return (
    <>
      <div>hello</div>
      <div>COMP5</div>
    </>
  );
}

function MyComp6() {
  return (
    <>
      <div>
        <h1>제목</h1>
        <p>Lorem ipsum dolor.</p>
      </div>
    </>
  );
}

function MyComp7() {
  return (
    <>
      <h2>두번째 제목</h2>
      <p>Lorem ipsum dolor.</p>
    </>
  );
}

function MyComp8() {
  return <h1>Hello</h1>;
}
function MyComp9() {
  return (
    <div>
      <h>Lorem.</h>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        consectetur dolor ex magnam obcaecati officiis quas quo, voluptas!
        Accusamus dolores hic iste itaque pariatur perferendis praesentium quae,
        recusandae totam voluptas?
      </p>
    </div>
  );
}

function App4() {
  return (
    <>
      <MyComp1 />
      <MyComp2 />
      <MyComp3 />
      <MyComp4 />
      <MyComp5 />
      <MyComp6 />
      <MyComp7 />
      <MyComp8 />
    </>
  );
}
export default App4;
