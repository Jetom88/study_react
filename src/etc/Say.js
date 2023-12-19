import { useState } from "react";

const Say = () => {
  //첫 번째는 상태, 두 번째 원소는 항태를 바꾸어 주는 함수(setter)
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("ㅎ2");
  const onClickLeave = () => setMessage("ㅂㅂ");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>

      <button
        style={{ color: "red" }}
        onClick={() => {
          setColor("red");
        }}
      >
        빨간색
      </button>
      <button
        style={{ color: "green" }}
        onClick={() => {
          setColor("green");
        }}
      >
        초록색
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          setColor("blue");
        }}
      >
        파란색
      </button>
    </div>
  );
};

export default Say;
