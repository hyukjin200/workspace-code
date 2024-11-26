import React from 'react'

export default function ContentEvent() {
  function handleClick2(e){
    alert(`${e.target.value} 를 클릭하셨군요!!!`);
  }
  const handleClick3=function(e){
    alert(`${e.target.value} 를 클릭하셨군요!!!`);
  }
    return (
    <div className='content'>
        <h3>이벤트처리</h3><br/>
        <input type='button' value='버튼1' onClick={(e)=>{
            console.log(e);
            console.log(e.target);
            alert(`${e.target.value} 를 클릭하셨군요!!!`);
        }}/>
        <input type='button' value='버튼2' onClick={handleClick2}/>
        <input type='button' value='버튼3' onClick={handleClick3}/>
    </div>
  )
}
