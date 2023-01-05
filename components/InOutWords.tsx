import { SetStateAction, useState } from "react";

export default function InOutWords() {
  const [text, setText] = useState("");

  const inputHandler = (e: { target: { value: SetStateAction<string> } }) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="text-center p-10 text-3xl">{text}</div>
      <input
        type="text"
        value={text}
        onChange={inputHandler}
        className="text-3xl bg-gray-300"
      />
    </>
  );
}
