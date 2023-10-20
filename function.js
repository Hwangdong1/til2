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

function makeObject(name, age){
    return{
        name,
        age,
        hobby:"baseball"
    }
}

const Mike = makeObjects(Mike, 30)

// 
function isAdult(user){
    if (!('age' in user) || user.age < 20){
        return false
    }
    return true
}
const Jenny ={
    name : Jenny
    age: 30
}
console.log(isAdult(Jenny))

//객체 for... in 문
const Yun ={
    name: "Yun",
    agme: 28
}

for(key in Yun){
    console.log(Yun[key])
    //console.log(key)??
}
 
//

const user ={
    name: "Mike",
    sayHello : function(){
        console.log('Hello , im ${this.name}')
    }
} 

let boy = {
    name: "Mike",
    showName: function(){
        console.log (boy.name)//(this.name)
    }
}

let man = boy
boy = null

man.showName()// ?




////배열 (Array)////

const students = [
    "Mike","Jun","Hwang","Donghyun"
]

students.length // 요소의 개수 반환

//push() -> 배열 끝에 추가 
let days =['월','화','수']
days.push('목')
//pop() -> 배열 끝 요소 제거

//shift , unshift -> 배열 앞에 제거/ 추가
//추가 
days.unshift()
//제거
days.shift()

//반복문: for

let days =['월','화','수','목','금']

for(let index = 0; index< days.length; index++){
    
}

//for .. of

for(let day of days){
    console.log(day)
}