import { useEffect, useState } from "react";

const FunctionInfo = () => {
  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChnageNickName = (e) => {
    setNickName(e.target.value);
  };

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div>
      <input value={name} onChange={onChangeName} />
      <input value={nickname} onChange={onChnageNickName} />
      <br />
      <div>
        <b>이름:{name}</b>
        <b>닉네임:{nickname}</b>
      </div>
    </div>
  );
};

export default FunctionInfo;
