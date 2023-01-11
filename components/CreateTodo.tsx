import { SetStateAction, useState } from "react";
import TodoDisp from "./TodoDisp";

export default function CreateTodo() {
  const [text, setText] = useState(""); //text: input入力された文章
  const [Todo, setTodo] = useState<string[]>([]); //Todo: <li>要素の配列

  const inputHandler = (e: { target: { value: SetStateAction<string> } }) => {
    setText(e.target.value);
  };
  const clickEnter = () => {
    setTodo((prevVal) => {
      return [...prevVal, text];
    });
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
      <TodoDisp todoList={Todo} />
    </>
  );
}
// --メモ
// 文字を打ち込む：<input>
// ↓
// Enterをクリックする
// ↓propsでTodo配列をTodoコンポーネントに渡す
// テキストのTODOリストを生成する（Todoコンポーネント）
// ↓
// mapで<li>要素配列にして<ul></ul>に表示する
