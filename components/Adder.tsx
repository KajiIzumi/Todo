import { useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

export function Adder() {
  const [cnt, setCnt] = useState(0);

  const addClick = () => {
    setCnt((cnt) => cnt + 1);
  };

  const resetClick = () => {
    setCnt((cnt) => (cnt = 0));
  };

  return (
    <>
      <div className="text-center">{cnt}</div>
      <button onClick={addClick}>add</button>
      <button onClick={resetClick}>Reset</button>
    </>
  );
}
