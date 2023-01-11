import { SetStateAction, useState } from "react";

export default function CreateUsefulTodo() {
  const [taskText, setTaskText] = useState("task"); //text: input入力された文章
  const [dateText, setDateText] = useState("date");
  const [priority, setPriority] = useState(false);
  const [todo, setTodo] = useState<object[]>([]); //Todo: <li>要素の配列

  const taskInputHandler = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setTaskText(e.target.value);
  };
  const dateInputHandler = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setDateText(e.target.value);
  };

  const clickEnter = () => {
    const todoObj: Object = {
      date: dateText,
      task: taskText,
      priority: priority,
    };
    const addTodo = [...todo, todoObj];
    setTodo(addTodo);
  };

  return (
    <>
      <input
        type="text"
        value={taskText}
        onChange={taskInputHandler}
        className="text-3xl bg-blue-300"
      />
      <input
        type="text"
        value={dateText}
        onChange={dateInputHandler}
        className="text-3xl bg-red-300"
      />

      <input
        type="checkbox"
        checked={priority}
        onChange={() => setPriority((prevState) => !prevState)}
        className="w-5 h-5 flex bg-gray-300"
      />

      <button onClick={clickEnter} className="bg-green-500 text-3xl">
        Enter
      </button>

      <table className="w-96 bg-gray-100">
        <thead>
          <tr className="text-2xl font-extrabold">
            <th>DATE</th>
            <th>TASK</th>
            <th>PRIORITY</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((obj, index) => {
            return (
              <tr key={index} className="text-xl">
                <td>{obj.date}</td>
                <td>{obj.task}</td>
                <td>{obj.priority.toString()}</td>
                {/* エラー： Property '上記3つのプロパティ' does not exist on type 'object'*/}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

// --メモ
// 文字+期限+重要度を入力
// [
// { TODO: 入力文字,
//   期限:  期限,
//   重要度: 重要度 }, ...
// ]
// ↓
// Enterをクリックする
// ↓
// ３要素をまとめたオブジェクトを生成する
// ↓
// mapで<li>要素配列にして<ul></ul>に表示する
