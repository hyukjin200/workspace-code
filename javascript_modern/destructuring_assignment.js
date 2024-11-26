/*
객체 분할 대입 또는 비구조화 할당 (Destructuring Assignment) 
*/
console.log(`/*************객체분할대입****************/`);
const myProfileObject = {
  name: "김경호",
  age: 38,
  address: "seoul",
};

let message = `내이름은 ${myProfileObject.name} 이고,
나이는 ${myProfileObject.age} 이며
주소는 ${myProfileObject.address} 입니다.`;
console.log(message);
/***객체 분할 대입*****/
const {name,age,address} = myProfileObject;
message = `내이름은 ${name} 이고,
나이는 ${age} 이며
주소는 ${address} 입니다.`;
console.log(message);

function myInfoPrint({name,age,address}){
  message = `내이름은 ${name} 이고,
나이는 ${age} 이며
주소는 ${address} 입니다.`;
console.log(message);
}
myInfoPrint(myProfileObject);

/***객체 분할 대입시 변수명변경*****/
let {name:irum,age:ag,address:addr} = myProfileObject;
message = `내이름은 ${irum} 이고,
나이는 ${ag} 이며
주소는 ${addr} 입니다.`;
console.log(message);
/*
배열분할대입
*/
console.log(`/*************배열분할대입****************/`);
const myProfileArray = ["김경호", 27, "제주도"];
message = `내이름은 ${myProfileArray[0]} 이고,
          나이는 ${myProfileArray[1]} 이며
          주소는  ${myProfileArray[2]} 입니다.`;
console.log(message);

let [a1,a2,a3]=myProfileArray;
message = `내이름은 ${a1} 이고,
          나이는 ${a2} 이며
          주소는  ${a3} 입니다.`;
console.log(message);
/***********react useState hook ********************/
let state=undefined;
function useState(initState){
  if(state==undefined){
    state=initState;
  }
  const setState=function(newState){
    state=newState;
  }
  let returnArray=[
    state,
    setState
  ];
  return returnArray;
}
/*************************************************/

let[count,setCount]= useState(0);
console.log(count);

setCount(6);
[count,setCount]= useState(0);
console.log(count);

