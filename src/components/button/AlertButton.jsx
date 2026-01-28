import React, { useState } from "react";

function AlertButton({ text, message }) {
  const [mainText, setMainText] = useState("data bisa berubah");

  function handleClick() {
    if (mainText === "data bisa berubah") {
      setMainText(message);
    } else {
      setMainText("data bisa berubah");
    }
  }

  return (
    <div>
      <button onClick={handleClick}>{text}</button>
      <p id="text">{mainText}</p>
    </div>
  );
}

export default AlertButton;