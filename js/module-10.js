/// timout timeinterval
//const timerId = setTimeout(callback, delay, arg1, arg2, ...);
const greet = (str = "world") => {
  console.log(`Hello, ${str}!`);
};
const timerId1 = setTimeout(() => greet(1), 2000);
const timerId2 = setTimeout(() => greet(2), 3000);
const timerId3 = setTimeout(greet, 1000, `Mary`);
const timerId4 = setTimeout(greet, 500);
clearTimeout(timerId1);

//
//const intervalId = setInterval(callback, delay, arg1, arg2, ...);
const timerId5 = setInterval(greet, 1000, `John`);
setTimeout(() => clearInterval(timerId5), 5000);
console.log(`timer cleared`);

/// date
const dateTemp = new Date();
console.log(typeof dateTemp, dateTemp, dateTemp.toLocaleTimeString()); // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"
console.log(typeof dateTemp.toLocaleTimeString(), dateTemp.toLocaleTimeString());
// const date = new Date(); // Поточна дата та час
// const date = new Date("2030-03-16");
// console.log(date); // "Sat Mar 16 2030 00:00:00 GMT+0200"
// const date = new Date("2030-03-16T14:25:00");
// console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200"
// console.log(new Date("2030")); // "Tue Jan 01 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03")); // "Fri Mar 01 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03-16")); // "Sat Mar 16 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03-16T14:25:00")); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// const time = new Date("T14:25:00"); // JavaScript інтерпретує це як час у поточному дні.

// Unix час - відлік часу рахується в мілісекундах що минули після опівночі 1 січня 1970 року в часовому поясі UTC (Coordinated Universal Time).
// console.log(new Date(0)); // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"
// console.log(new Date(15000)); // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"
console.log(dateTemp.getTime()); // 1624021654154
const timeNow = Date.now(); // 1693237207904
console.log(typeof timeNow, timeNow);

/// геттери сеттери
// setHours(), setMinutes(), setSeconds()
// setDate(day), setMonth(month), setFullYear(year)
// getHours(), getMinutes(), getSeconds()
// getDate(day), getMonth(month), getFullYear(year)
// date.setHours(14, 25, 0); // Встановлюємо 14:25:00

/// promises
// const promise = new Promise((resolve, reject) => {
