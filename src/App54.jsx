import React from "react";
import axios from "axios";

function App54(props) {
  function handleButton1Click() {
    axios.request({ method: "post", url: "/api/main29/sub1" });
  }

  function handleButton2Click() {
    axios.post("/api/main29/sub2"); // 더 자주
  }

  function handleButton3Click() {
    axios.post("/api/main29/sub3");
  }

  function handleButton4Click() {
    // 두 번째 파라미터는 json 으로 직렬화(stringify, encoding)
    axios.post("/api/main29/sub4", { name: "son", age: 44 });
  }

  function handleButton5Click() {
    axios.post("/api/main29/sub5", {
      address: "seoul",
      score: 88.12,
      country: "korea",
    });
  }

  function handleButton6Click() {
    axios.post("/api/main29/sub6", {
      var1: "신촌", // string
      var2: 1, // number
      var3: 11.11, // number
      var4: true, // boolean
      var5: null, // null
    });
  }

  function handleButton7Click() {
    axios.post("/api/main29/sub7", {
      address: "seoul",
      score: 88.12,
      age: 123,
      married: true,
    });
  }

  function handleButton8Click() {
    axios.post("/api/main29/sub8", {
      address: "강남",
      age: 77,
      fruits: ["apple", "lemon", "mango"], //array
    });
  }

  function handleButton9Click() {
    axios.post("/api/main29/sub9", {
      name: "son",
      teams: ["서울", "런던", "제주"],
      person: {
        name: "흥민",
        address: "서울",
        age: 55,
      },
    });
  }

  function handleButton10Click() {
    axios.post("/api/main29/sub10", {
      cityList: ["london", "seoul", "tokyo"],
      team: "manyou",
    });
  }

  function handleButton11Click() {
    axios.post("/api/main29/sub11", ["java", "boot", "spring"]);
  }

  function handleButton12Click() {
    axios.post("/api/main29/sub12", [
      {
        name: "son",
        age: 55,
        address: "seoul",
      },
      {
        name: "park",
        age: 55,
        address: "suwon",
      },
      {
        name: "cha",
        age: 55,
        address: "incheon",
      },
    ]);
  }

  function handleButton13Click() {
    axios.post("/api/main29/sub13", {
      nickName: "흥민", //String
      // object
      team: {
        name: "토트넘",
        location: "london",
      },
      age: 33, // number
      married: false, // boolean
      address: ["seoul", "런던", "벨를린"], // array
    });
  }

  function handleButton14Click() {
    axios.post("/api/main29/sub14", {
      person: {
        name: "흥민",
        age: 55,
      },
      city: "서울",
      score: 88.33,
      checked: true,
      fruits: ["apple", "lemon", "mango"],
    });
  }

  return (
    <div>
      <button onClick={handleButton14Click}>post 14</button>
      <hr />
      <button onClick={handleButton13Click}>post 13</button>
      <hr />
      <button onClick={handleButton12Click}>post 12 (array of objects)</button>
      <hr />
      <button onClick={handleButton11Click}>post 11 (array)</button>
      <hr />
      <button onClick={handleButton10Click}>post 10 w / data (Object)</button>
      <hr />
      <button onClick={handleButton9Click}>post 9 w / data (Object)</button>
      <hr />
      <button onClick={handleButton8Click}>post 8 w / data (array)</button>
      <hr />
      <button onClick={handleButton7Click}>
        post 7 w / data (boolean, String, number)
      </button>
      <hr />
      <button onClick={handleButton6Click}>
        post 6 w / data(boolean, string, number,null)
      </button>
      <hr />
      <button onClick={handleButton5Click}>post 5 w / data</button>
      <hr />
      <button onClick={handleButton4Click}>post 4</button>
      <hr />
      <button onClick={handleButton3Click}>post 3</button>
      <hr />
      <button onClick={handleButton2Click}>post 2</button>
      <hr />
      <button onClick={handleButton1Click}>post 1</button>
    </div>
  );
}

export default App54;
