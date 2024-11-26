import React from 'react'

export default function ContentJSX() {
   const number1=1;
   const number2=2;
   const name1='김경호';
   const name2='김수로';
   const isMarried1=true;
   const isMarried2=true;
   const guest={
    guestNo:1,
    guestName:'KIM',
   } 
   const num=3;


  return (
    <div className="content">
        <h3 style={{margin:0}}>JSX[JavaScript eXtensible]</h3>
        <ul>
            <li>{number1+number2}</li>
            <li>{name1+" "+name2}</li>
            <li>{isMarried1}</li>
            <li>{isMarried2?'유부초밥':'김밥'}</li>
            <li>{guest.guestNo},{guest.guestName}</li>
            <li>{num}은 {num%2===0?'짝수':'홀수'}입니다</li>
        </ul>
    </div>
  );

  
}
