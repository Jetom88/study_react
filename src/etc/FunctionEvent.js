import { useState } from "react";

const FunctionEvent = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트연습</h1>
      <input name="username" placeholder="사용자명" value={username} onChange={onChange} />
      <input name="message" placeholder="아무거나" value={message} onChange={onChange} onKeyPress={onKeyPress} />

      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default FunctionEvent;
