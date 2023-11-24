let date = new.date() //현재 날짜 가져오기
//let utc = date.getTime()+ (date.getTimezoneOffset() * 60 *1000)//
  //utc 표준시 도출
  //let kstGap = 9 * 60 * 60 * 1000//
  //한국시간 더하기
  //let today = new Date (utc + kstGap)//
    // 한국 시간으로  date 객체 만들기 (오늘)

    //이전달의 마지막날 날짜와 요일 구하기
let startDay = new Date(currentYear, currentMonth, 0)
let prevDate = startDay.getDate()
let prevDay = startDay.getDay()

let endDay = new Date(currentYear, currentMonth +1, 0)
let nextDate = endDay.getDate()
let nextDay = endDay.getDay()
console.log(prevDate , prevDay , nextDate, nextDay);