import React, { useState } from "react";

export default function ContentUseStateForm2() {
  console.log("ContentUseStateForm1()..");
  let initUser={
    id:'',
    password:'',
    name:'',
    email:''
  }
  const [user, setUser] = useState(initUser);
 
  const onUserChangeForm=(e)=>{
    console.log(e.target.name);
    setUser({
      ...user,
     [e.target.name]:e.target.value

    });

  }
  console.log(">>>>>>>>>>>>",user);
  
  const joinSubmitButtonAction=(e)=>{
    console.log(">>회원가입(submit button)",user);
    e.preventDefault();
  };
  const joinButtonAction=(e)=>{
    console.log(">>회원가입(button)",user);
   
  };
  return (
    <div className="content">
      <h3>useState로 폼입력관리하기2</h3>
      <form onSubmit={joinSubmitButtonAction}>
        아이디:
        <input type="text" name="id" value={user.id} onChange={onUserChangeForm} />
        <br />
        패쓰워드:
        <input type="password" name="password" value={user.password} onChange={onUserChangeForm} />
        <br />
        이름:
        <input type="text" name='name' value={user.name} onChange={onUserChangeForm} /> <br />
        이메일:
        <input type="text" name='email' value={user.email} onChange={onUserChangeForm} /> <br />
        <input type="button" value="가입" onClick={joinButtonAction}/>
        &nbsp;&nbsp;&nbsp;
        <input type="submit" value="가입[submit]" />
      </form>
    </div>
  );
}
