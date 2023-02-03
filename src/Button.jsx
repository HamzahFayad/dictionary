import "./App.css";

function Button({btn, onClick}) {

  return (
    <>
        <button className="btn" onClick={ onClick }>{ btn }</button>
    </>
  );
}

export default Button;
