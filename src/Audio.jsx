import "./App.css";

function Audio({ audio }) {



  return (
      <>
        <audio id="audio" src={audio} controls/>
        <img src="./assets/icon-play.svg" alt="play icon"/>

    </>
  );
}

export default Audio;
