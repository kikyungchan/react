import { useState } from "react";

function MyComp1() {
  const [person, setPerson] = useState({
    name: "",
    address: { city: "", country: "" },
  });
  const [history, setHistory] = useState([]);

  function handleNameChange(e) {
    const nextPerson = structuredClone(person);
    nextPerson.name = e.target.value;
    setPerson(nextPerson);
  }

  function handleCityChange(e) {
    const nextPerson = structuredClone(person);
    nextPerson.address.city = e.target.value;
    setPerson(nextPerson);
  }

  function handleCountryChange(e) {
    const nextPerson = structuredClone(person);
    nextPerson.address.country = e.target.value;
    setPerson(nextPerson);
  }

  function handleSaveClick(e) {
    const nextHistory = [...history];
    nextHistory.push(person);
    setHistory(nextHistory);
  }

  return (
    <div>
      <div className="d-flex">
        <div className="flex-1">
          <div>
            <input
              type="text"
              value={person.name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <input
              type="text"
              value={person.address.city}
              onChange={handleCityChange}
            />
          </div>
          <div>
            <input
              type="text"
              value={person.address.country}
              onChange={handleCountryChange}
            />
          </div>
          <button onClick={handleSaveClick}>변경</button>
        </div>
        <div className="flex-1">
          <h3>변경 이력</h3>
          {history.map((item) => (
            <div className="border my-5">
              <div>이름 : {item.name}</div>
              <div>도시 : {item.address.city}</div>
              <div>국가 : {item.address.country}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MyComp2() {
  const [person, setPerson] = useState({
    name: "",
    address: { city: "", country: "" },
  });
  const [history, setHistory] = useState([]);

  function handleNameChange(e) {
    const nextPerson = { ...person }; // 얕은복사 ( 하면 안됌)
    nextPerson.name = e.target.value;
    setPerson(nextPerson);
  }

  function handleCityChange(e) {
    const nextPerson = { ...person };
    nextPerson.address.city = e.target.value;
    setPerson(nextPerson);
  }

  function handleCountryChange(e) {
    const nextPerson = { ...person };
    nextPerson.address.country = e.target.value;
    setPerson(nextPerson);
  }

  function handleSaveClick(e) {
    const nextHistory = [...history];
    nextHistory.push(person);
    setHistory(nextHistory);
  }

  return (
    <div>
      <div className="d-flex">
        <div className="flex-1">
          <div>
            <input
              type="text"
              value={person.name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <input
              type="text"
              value={person.address.city}
              onChange={handleCityChange}
            />
          </div>
          <div>
            <input
              type="text"
              value={person.address.country}
              onChange={handleCountryChange}
            />
          </div>
          <button onClick={handleSaveClick}>변경</button>
        </div>
        <div className="flex-1">
          <h3>변경 이력</h3>
          {history.map((item) => (
            <div className="border my-5">
              <div>이름 : {item.name}</div>
              <div>도시 : {item.address.city}</div>
              <div>국가 : {item.address.country}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App32(props) {
  return (
    <div>
      {/*잘 안돌아가는 버전(얕은복사)*/}
      <MyComp2 />
      <hr />
      {/*잘 돌아가는버전(깊은복사)*/}
      <MyComp1 />
    </div>
  );
}

export default App32;
