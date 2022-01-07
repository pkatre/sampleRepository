import React, { useEffect, useState } from "react";

export default function Example1() {
  const [num, setNum] = useState(0);
  const [number, setNums] = useState(0);

  useEffect(() => {
    alert(" I am clicked");
  }, [num]);
  return (
    <div>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>click</button>
      <br />
      <button
        onClick={() => {
          setNums(number + 1);
        }}
      >
        click me{number}
      </button>
    </div>
  );
}
