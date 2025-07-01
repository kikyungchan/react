function MyComp1({ color, score, city, kids, skills, person }) {
  console.log("컬러", color);
  console.log("점수", score);
  console.log("도시", city);
  console.log("어린이", kids);
  console.log("기술", skills);
  console.log("객체", person);
  return null;
}

// props 의 타입은 뭐든지 가능
// string은 "
// 나머지는 {}

function MyComp2({ name, age, address, married }) {
  console.log("name", name); // lee
  console.log("age", age); // 44
  console.log("address", address); // city: "seoul", country:"korea"
  console.log("married", married); // false
  return null;
}

function App7() {
  return (
    <>
      <MyComp1
        color="yellow"
        score={123.123}
        city={"seoul"}
        kids={true}
        skills={["java", "css", "react"]}
        person={{ name: "son", age: 33, team: "토트넘" }}
      />
      <MyComp2
        name={"lee"}
        age={44}
        address={{ city: "seoul", country: "korea" }}
        married={false}
      />
    </>
  );
}

export default App7;
