import React, { useState } from "react";

export default function Accordion(props) {
  const [visible, setVisible] = useState(false);

  const changeVisiblity = () => setVisible(!visible);
  console.log(props);

  return (
    <div>
      <p onClick={changeVisiblity}>TYTUŁ: {props.title ?? "Nie dotyczy"}</p>
      {visible ? <h3>{props.text}</h3> : null}
    </div>
  );
}
