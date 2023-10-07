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
