import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const API = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const [word, setWord] = useState("");

  const [result, setResult] = useState({});

  const handleSetWord = (e) => {
    setWord(e.target.value);
  };

  const handleSearch = () => {
    axios.get(API + word).then((res) => {
      setResult(res.data[0]);
      console.log(res.data[0]);
    });
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="App">
      <div className="sectionSize">
        <div className="uiSection nav">
          <img className="App-logo" src="./assets/logo.svg" alt="logo" />
          <img
            className="icon icon-xs"
            src="./assets/moon.svg"
            alt="moon_switch"
          />
        </div>
        <div className="uiSection searchBar">
          <input
            value={word}
            onChange={handleSetWord}
            placeholder="Search"
            type="text"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <p>
          {result?.word}, {result?.phonetics[0].text}
        </p>
      </div>
    </div>
  );
}

export default App;
