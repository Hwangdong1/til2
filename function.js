function showError() {
  alert("에러가 발생했음");
}

showError();

//매개변수가 잇는 함수
function sayHello(name) {
  const msg = "Hello, ${name}";
  console.log(msg);
}

sayHello(mike);

//
function sayHello(name) {
  let msg = "Hello"; // 함수 내부에서 사용하는 변수를 지역변수라 함 (함수 밖에선 시용x)
  if (name) {
    msg += ", " + name;
  }
}

sayHello();



function sayHello(name){
    let newName = name || 'friend';
    let msg += 'Hello, ${name}'
    console.log(msg)
}

sayHello();
sayHello('Jane');

// return 으로 값 반환 

function add (num1, num2){
    return num1 + num2;
}

const result = add(2,3);
console.log(result)

//함수 선언문 vs 함수 표현식

function sayHello(){
    console.log('Hello');
}

//표현식
let sayHello =function(){
    console.log('Hello');
}
sayHello();

//화살표 함수 (arrow function)

let add = function(num1, num2){
    return num1+ num2;
}
// let add =(num1,num2)=> num1 + num2;
// let sayHello = name => `Hello, &{name}`;