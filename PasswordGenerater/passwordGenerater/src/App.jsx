import React, { useEffect } from "react";
import { useState, useCallback } from "react";

export default function App() {
  const [length, setLength] = useState();
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const PasswordGenerater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghiklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";

    if (charAllowed) str += "!@#$%^&*()-_=+|{};:/?.>";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);


  const copyPassword = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
        PasswordGenerater()
  },[length,numberAllowed,charAllowed,PasswordGenerater])

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center ">
      <div className="bg-gray-700 mx-4 rounded-xl p-2 text-white">
        <h1 className=" text-3xl  text-center "> Password Gererator</h1>
        <div className="flex justify-center items-center m-3">
          <input
            type="text"
            placeholder="password"
            className="rounded-l-md p-2 justify-center items-center outline-none text-orange-600"
            value= {password}
            readOnly
          />

          <button className="bg-blue-600 p-2 rounded-r-md text-white hover:opacity-90"
          onClick={copyPassword}>
            Copy
          </button>
        </div>

        <div className=" flex justify-center items-center gap-4">
          <div className="flex gap-2 p-3">
            <input
              type="range"
              defaultValue={8}
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-white "> Length {length}</label>
          </div>

          <div className="flex gap-2 p-3 text-white">
            <input
              type="checkbox"
              defaultValue={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>NumberAllowed</label>
          </div>

          <div className="flex gap-2 p-3 text-white">
            <input
              type="checkbox"
              defaultValue={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>CharacterAllowed</label>
          </div>
        </div>
      </div>
    </div>
  );
}
