import Calender from "../components/Calender";
import CreateUsefulTodo from "../components/CreateUsefulTodo";
import { GoTop } from "../components/GoTop";
import Header from "../components/Header";

export default function Step10() {
  return (
    <>
      <Header stepNum="10" title="create useful TodoList"></Header>
      <CreateUsefulTodo />
      {/* <Calender /> */}
      <GoTop />
    </>
  );
}
