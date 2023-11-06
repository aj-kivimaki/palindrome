import React, { useState } from "react";
// import Textbox from "./Textbox";

function App() {
  const [result, setResult] = useState("");

  function handleChange(event) {
    return setResult(event.target.value);
  }

  return (
    <div className="textbox">
      <input
        type="text"
        id="textbox"
        placeholder="word, number or phrase"
        onChange={handleChange}
      />
      <label htmlFor="textbox" name="textbox">
        {result}
      </label>
    </div>
  );
}

export default App;
