while(true){
    let answer = confim();
    if(!answer){
        break;
    }
}

//반복문 
//for문

for (const i =0; i<10; i++){
    //  반복코드
}


//while 문
let i =0

while(i<10){
    //코드 
    console.log(i);
    i++;
}

//do.. while 문
let i = 0;
do{
    //코드 
    i==;
}while (i<10)

//break

while(true){
answer = confirm("");
if(!answer){
    break;
 }
}

//continue
for(let i = 0; i<10; i++){
    if(i%2){
        continue;
    }
    console.log(i)
}//2의 배수찍는 문장

//switch문
let ticket = prompt('티켓을 고르시오')

switch (ticket){
    case '스탠딩 sr석';
     console.log ('495000');
     break;
    case '스탠딩 a석';
     console.log ('5855000');
     break;
    case '스탠딩 b석';
    console.log ('450000');
    break;
    default ;
    console.log('')
}

const age = parseInt(prompt("how old are you"));

if (isNaN(age) || age < 0) {
  console.log("please write a age");
} else if (age < 18) {
  console.log("보호자의 동의가 필요합니다.");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink");
} else if (age > 50) {
  console.log("you are too old ho fp to drink ");
}

const calculators = {
    add: function (a,b) {
       alert(a+b);
    },
    minus: function (a,b) {git
            alert(a-b)
        },
    powerof: function (a,b) {
        alert(a**b)
    }
    
}

//function 
function showError(){
    alert('에러가 발생햇습니다, 다시 시도해라')
}

showError()

//매개변수가 있는 함수

function sayHelloto(name){
    const msg = 'Hello, ${name}'
}

const age = 96;
function calculateKrAge(ageOdsdsdfForeigner) {
    return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);

console.log()


//함수 작성
//매개변수가 있는 함수

function sayHello(name){
    let msg ='Hello';
    if(name){
        msg = 'Hello, ${myname}';
    }
    console.log(msg);
}
sayHello();

    
//continue
for(let i = 0; i<10; i++){
    if(i%2){
        continue;
    }
    console.log(i)
}//2의 배수찍는 문장

//break

while(true){
    answer = confirm("");
    if(!answer){
        break;
     }
    }
    
    //continue
    for(let i = 0; i<10; i++){
        if(i%2){
            continue;
        }
        console.log(i)
    }//2의 배수찍는 문장

