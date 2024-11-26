import React, { useState } from "react";

export default function ContentUseStateForm1() {
  console.log("ContentUseStateForm1()..");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  let user={
    id:id,
    password:password,
    name:name,
    email:email
  }
  
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const joinSubmitButtonAction=(e)=>{
    console.log(">>회원가입(submit button)",user);
    e.preventDefault();
  };
  const joinButtonAction=(e)=>{
    console.log(">>회원가입(button)",user);
   
  };
  return (
    <div className="content">
      <h3>useState로 폼입력관리하기1</h3>
      <form onSubmit={joinSubmitButtonAction}>
        아이디:
        <input type="text" value={id} onChange={onChangeId} />
        <br />
        패쓰워드:
        <input type="password" value={password} onChange={onChangePassword} />
        <br />
        이름:
        <input type="text" value={name} onChange={onChangeName} /> <br />
        이메일:
        <input type="text" value={email} onChange={onChangeEmail} /> <br />
        <input type="button" value="가입" onClick={joinButtonAction}/>
        &nbsp;&nbsp;&nbsp;
        <input type="submit" value="가입[submit]" />
      </form>
    </div>
  );
}
