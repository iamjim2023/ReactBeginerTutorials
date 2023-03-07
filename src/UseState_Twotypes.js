import { useState, useEffect } from "react";

function UseState_TwoTypes() {
  useEffect(() => {
    console.log("Hi :D");
    return () => console.log("bye :d");
  }, []);

  useEffect(function () {
    console.log("Hi :D");
    return function () {
      console.log("bye :d");
    };
  }, []);
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default UseState_TwoTypes;
