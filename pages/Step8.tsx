import CreateTodo from "../components/CreateTodo";
import { GoTop } from "../components/GoTop";
import Header from "../components/Header";

export default function Step8() {
  return (
    <>
      <Header stepNum="8" title="create TodoList" />
      <CreateTodo />
      <GoTop />
    </>
  );
}
