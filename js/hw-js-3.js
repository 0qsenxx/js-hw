// #1
const k1 = "5px";
const k2 = "12djd334";
const k3 = "12.45asdwe12";
const k4 = "qwqweeewq";
const k1Number = Number.parseInt(k1);
const k2Number = Number.parseInt(k2);
const k3Number = Number.parseInt(k3);
const k4Number = Number.parseInt(k4);
console.log(Math.round(k1Number));
console.log(Math.round(k2Number));
console.log(Math.round(k3Number));
console.log(Math.round(k4Number));

// #2
const k12 = "5px";
const k22 = "12djd334";
const k32 = "12.45asdwe12";
const k42 = "qwqweeewq";
const k1Number2 = Number.parseFloat(k12);
const k2Number2 = Number.parseFloat(k22);
const k3Number2 = Number.parseFloat(k32);
const k4Number2 = Number.parseFloat(k42);
console.log(k1Number2);
console.log(k2Number2);
console.log(k3Number2);
console.log(k4Number2);

// #3
console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));
console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));

// #4
const min = 3;
const max = 19;
console.log(Math.round(Math.random() * (max - min) + min));
