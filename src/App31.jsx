import { useState } from "react";

function MyComp1() {
  const [person, setPerson] = useState({
    name: "son",
    address: {
      city: "london",
      country: "uk",
    },
  });

  function handleNameChange(e) {
    setPerson({ ...person, name: e.target.value });
  }

  function handleCityChange(e) {
    // const newPerson = setPerson({ ...person }); // 좋은 코드 아님( 얕은복사 시 에러)
    const newPerson = structuredClone(person); // 이렇게 써야 함 (깊은복사 해야함)
    newPerson.address.city = e.target.value;
    console.log(newPerson);
    setPerson(newPerson);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="이름"
          value={person.name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="도시"
          value={person.address.city}
          onChange={handleCityChange}
        />
      </div>
      <div>
        <input type="text" placeholder="국가" value={person.address.country} />
      </div>
    </div>
  );
}

function App31(props) {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App31;
