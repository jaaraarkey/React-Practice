// import React from "react";

import { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  return (
    <input
      onChange={handleInput}
      value={input}
      type="text"
      className="bg-slate-50 p-2 rounded-full text-center  bg-opacity-25 border-hidden focus:bg-slate-50 active:border-slate-50 focus:text-slate-950 focus:bg-opacity-70 "
      placeholder="type here "
    ></input>
  );
};

export default Input;
