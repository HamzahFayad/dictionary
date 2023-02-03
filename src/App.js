import { useState } from "react";
import "./App.css";
import axios from "axios";
import Button from "./Button";
import Audio from "./Audio";
//<Audio audio={result?.phonetics[0].audio} />

function App() {
  const API = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const [word, setWord] = useState("");
  const [result, setResult] = useState([]);
  const [audio, setAudio] = useState("");
  const [phonetic, setPhonetic] = useState("");

  const handleSetWord = (e) => {
    setWord(e.target.value);
  };

  const handleSearch = () => {
    axios.get(API + word).then((res) => {
      setResult(res.data[0]);
      console.log(res.data[0]);

      let phoneticData = res.data[0].phonetics;

      if (res.data[0].phonetics[0].audio) {
        setAudio(phoneticData[0].audio);
      } else if (phoneticData[1].audio) {
        setAudio(phoneticData[1].audio);
      } else if (phoneticData[2].audio) {
        setAudio(phoneticData[2].audio);
      } else {
        setAudio("");
      }

      if (phoneticData[0].text) {
        setPhonetic(phoneticData[0].text);
      } else if (phoneticData[1].text) {
        setPhonetic(phoneticData[1].text);
      } else {
        setPhonetic("");
      }
    });
  };

  /*useEffect(() => {
    handleSearch();
  }, []);*/

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
          <Button btn="Search" onClick={handleSearch} />
        </div>

        <p>{result?.word}</p>
        <p>{phonetic}</p>
        <p>{audio}</p>
        <Audio audio={audio} />
      </div>
    </div>
  );
}

export default App;
