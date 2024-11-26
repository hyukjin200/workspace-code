import React, { useRef, useState } from "react";

export default function UseRef() {
  console.log("----useRef---")
  const inputElmentRef = useRef();
  const formRef = useRef();
  const isFirst=useRef(true);

  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
 
  const handleOnClick = (e) => {
    console.log(inputElmentRef.current);
    console.log(formRef.current);
    console.log(isFirst.current);
    if (text.length === 0) {
      alert("입력하세요!!");
      inputElmentRef.current.focus();
      return;
    }
    if(isFirst.current){
        alert('첫번째 '+text);
        isFirst.current=false;
    }else{
        alert(text);
    }
    setText('');
    inputElmentRef.current.focus();
    e.preventDefault();
  };

  return (
    <div className="content">
      <h3>useRef</h3>
      <form ref={formRef}>
        <input
          type="text"
          value={text}
          onChange={handleOnChange}
          ref={inputElmentRef}
        />
       <button type="button" onClick={handleOnClick}>작성완료</button>
      </form>
      
    </div>
  );
}
