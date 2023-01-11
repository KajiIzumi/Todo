export default function TodoDisp(props: { todoList: any[] }) {
  return (
    <>
      <ul className="text-2xl list-disc p-10">
        {props.todoList.map((text, index) => {
          return <li key={index}>{text}</li>;
        })}
      </ul>
    </>
  );
}
