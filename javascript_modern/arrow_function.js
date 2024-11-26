/*
화살표함수
*/
function func1(value) {
  return ">>> "+value;
}
console.log(func1("func1입니다"));

const func2 = (value) => {
  return  ">>> "+value;
};
console.log(func2("func2입니다"));

/*화살표함수 생략표기법*/
//인수가 1개 일때 소괄호생략가능
const func3 = value => ">>> "+value;
console.log(func3("func3입니다"));
//인수가 2개 이상일때 소괄호생략불가능
const func4 = (value1,value2) => value1+value2;
console.log('func4(1,2):',func4(1,2))
//return문 생략
//1행으로 반환할때 {},return생략
const func51=(no1,no2)=>no1+no2;
console.log('func51(1,2):',func51(1,2));

const func52=(no1,no2)=>{return no1+no2};
console.log('func52(1,2):',func52(1,2));

/****객체반환***/
const func61=(v1,v2)=>{
  const obj={
    name:v1,
    age:v2
  };
  return obj;
};
console.log("func61('제임스',30)",func61('제임스',30));
const func62=(v1,v2)=>{
  return{
    name:v1,
    age:v2
  };
};
console.log("func62('제임스',30)",func62('제임스',30));

//()를 이용해 한행으로 모으기
const func63=(v1,v2)=>(
                      {
                        name:v1,
                        age:v2
                      }
                    );
console.log("func63('제임스',30)",func63('제임스',30));