import { SetStateAction, useState } from "react";

export default function CreateTodo() {
  const [text, setText] = useState(""); //text: input入力された文章
  const [Todo, setTodo] = useState<string[]>([]); //Todo: <li>要素の配列
  const inputHandler = (e: { target: { value: SetStateAction<string> } }) => {
    setText(e.target.value);
  };

  const clickEnter = () => {
    const addTodo = [...Todo, text];
    setTodo(addTodo);
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={inputHandler}
        className="text-3xl bg-gray-300"
      />
      <button onClick={clickEnter} className="bg-green-500 text-3xl">
        Enter
      </button>
      <ul className="text-2xl list-disc p-10">
        {Todo.map((text, index) => {
          return <li key={index}>{text}</li>;
        })}
      </ul>
    </>
  );
}
// --メモ
// 文字を打ち込む：<input>
// ↓
// Enterをクリックする
// ↓
// テキストのTODOリストを生成する
// ↓
// mapで<li>要素配列にして<ul></ul>に表示する
