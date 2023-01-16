import { SetStateAction, SyntheticEvent, useState } from "react";
import Calender from "./Calender";
import CheckBox from "./CheckBox";
import InputTask from "./InputTask";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CreateUsefulTodo() {
  interface todoType {
    date: string;
    task: string;
    priority: boolean;
  }
  const [priority, setPriority] = useState<boolean>(true);
  const [todo, setTodo] = useState<todoType[]>([]); //Todo: <li>要素の配列
  const [dateVal, setDateVal] = useState<Date | string>("2023-01-01"); //calenderにpropsで渡して操作
  const [taskText, setTaskText] = useState("task"); //InputTaskにpropsで渡して操作操作

  // ↓InputTaskに渡す
  const taskInputHandler = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setTaskText(e.target.value);
  };
  // ↓Calenderに渡す
  const dateInputHandler = (e: {
    target: { value: SetStateAction<string | Date> };
  }) => {
    setDateVal(e.target.value);
  };

  const clickEnter = () => {
    const todoObj: todoType = {
      date: dateVal.toString(),
      task: taskText,
      priority: priority,
    };
    const addTodo = [...todo, todoObj];
    setTodo(addTodo);
  };

  return (
    <>
      <InputTask
        value={taskText}
        onChange={(e: { target: { value: SetStateAction<string> } }) => {
          taskInputHandler(e);
        }}
      />

      <Calender
        value={dateVal}
        onChange={(e: { target: { value: SetStateAction<string | Date> } }) =>
          dateInputHandler(e)
        }
      />
      {/* 
      <input
        type="checkbox"
        checked={priority}
        onChange={() => setPriority((prevState) => !prevState)}
        className="w-5 h-5 flex bg-gray-300"
      /> */}

      <CheckBox
        value={priority}
        onChange={() => setPriority((prevState) => !prevState)}
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
          {todo.map((obj: todoType, index: number) => {
            // console.log(obj);
            return (
              <tr key={index} className="text-xl">
                <td>{obj.date}</td>
                <td>{obj.task}</td>
                <td>{obj.priority.toString()}</td>
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
// { TODO: 入力文字, //inputtaskから取得
//   期限:  期限,　//calenderから取得
//   重要度: 重要度 }, ...
// ]
// ↓
// Enterをクリックする
// ↓
// ３要素をまとめたオブジェクトを生成する
// ↓
// mapで<li>要素配列にして<ul></ul>に表示する
