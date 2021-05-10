import "./App.css";
import { useState } from "react";
import axios from "axios";
import { API } from "./backend";

function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [details_list, setdetails_list] = useState([]);
  const senddata = () => {
    console.log(name + " " + email);
    axios
      .post(API + "getuser", {
        name: name,
        email: email,
      })
      .then((res) => {
        console.log(res);
        alert("sucess");
      });
  };

  const getdata = () => {
    axios.get(API + "giveuser", {}).then((res) => {
      console.log(res.data);
      alert("sucess");
      setdetails_list(res.data);
    });
  };

  return (
    <div className="App">
      <h1>hello world</h1>
      <label>name</label>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <br />

      <label>email</label>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <br />

      <button onClick={senddata}>submit</button>
      <button onClick={getdata}>get details of every one</button>
      {details_list.map((val, key) => {
        return (
          <div>
            <h1>{key}</h1>
            <p>name:{val.name}</p>
            <p>email:{val.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
