/*
spread 연산자
*/

//배열병합
var fruitOne=['apple','banana'];
var fruitTwo=['grape','peach'];
var fruitsAll=fruitOne.concat(fruitTwo);
console.log(fruitsAll);
/******** ES6 spread 연산자[배열병합]************/
fruitsAll=[...fruitOne,...fruitTwo];
console.log(fruitsAll);
//배열복사
var fruitOne = ['cherry','tomato'];
console.log(fruitOne);
var fruitTwo = fruitOne.slice();
fruitTwo.push('mango');
console.log(fruitTwo);

var fruitOne = ['pine apple','melon'];
console.log(fruitOne);
var fruitTwo = fruitOne.map((item)=>item);
fruitTwo.push('orange');
console.log(fruitTwo);
/******** ES6 spread 연산자[배열복사]************/
var fruitOne=['water melon','kiwi'];
console.log(fruitOne);
var fruitTwo = [...fruitOne,'참외'];
console.log(fruitTwo);

/************ES6 spread 연산자[객체복사]**************/
let user1={
    userId:'guard1',
    name:'김가드1',
    email:'guard1@gmail.com'
};
console.log(user1);
let user2={
    ...user1,
    age:12
}
console.log(user2);
let user3={
    ...user2,
    name:'제임스',
    age:40,
    address:'seoul'
}
console.log(user3);
