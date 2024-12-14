//////// 1-vazifa

// let obj = {
//   name: "Asad",
//   age: 22,
// };

// Object.defineProperty(obj, "name", {
//   writable: false,
// });
// obj.name = "Bahrom";
// console.log(obj);

//////// 2-vazifa

// let student = {
//   name: "Alisher",
//   _age: 0,
//   get age() {
//     return this._age;
//   },
//   set age(value) {
//     if (value >= 7 && value <= 70) {
//       this._age = value;
//     } else {
//       this._age = undefined;
//       console.error("Korsatilgan yosh oraligida emas!!!");
//     }
//   },
// };
// student.age = 22;
// console.log(student);

////////// 3-vazifa

// const user = {
//   name: "Diyor",
//   age: 18,
// };
// Object.defineProperties(user, {
//   name: {
//     writable: false,
//     configurable: false,
//   },
//   age: {
//     writable: false,
//     configurable: false,
//   },
// });
// user.name = "Ahadjon";
// delete user.name;
// console.log(user);

///////// 4-vazifa

// const phone = {
//   title: "Iphone",
//   price: 980,
// };
// Object.defineProperties(phone, {
//   title: {
//     writable: false,
//     configurable: false,
//   },
//   price: {
//     writable: false,
//     configurable: false,
//   },
// });
// phone.title = "Samsung";
// phone.price = 100;
// console.log(phone);

////// 5-vazifa

// const settings = {
//   theme: "Purple",
//   language: "eng",
//   screen_brightness: "50 %",
// };
// Object.freeze(settings);
// settings.theme = "Dark";
// settings.language = "ru";
// settings.screen_brightness = "75 %";
// console.log(settings);

/////// 6-vazifa

/// 1-usul push qilib bolmaydi lekin mavjudini ozgartirib boladi

// let array = [1, 2, 3];
// Object.seal(array);
// array[0] = 20;
// console.log(array);

//// 2-usul umuman muzlatib qoyadi hech qaysi methodni ishlatib bolmaydi

// let array = [1, 2, 3];
// Object.freeze(array);
// array.unshift(20);
// console.log(array);

////////// 7-vazifa

// const student = {
//   name: "Ahmadjon",
//   age: 19,
// };
// Object.seal(student);
// student.grades = [5, 5, 4, 4, 3, 5];
// student.age = 22;
// console.log(student);

////////// 8-vazifa

// const message = {
//   title: "Hello",
//   text: "Object methods",
//   size: "h1",
// };
// Object.seal(message);
// message.name = "Javascript";
// message.size = "h2";
// console.log(message);

//////// 9-vazifa

// const fruits = ["Anor", "Nok", "Gilos"];
// const vegetables = ["Sabzi", "Qovoq", "Bodring"];
// let foods = [...fruits, ...vegetables];
// console.log(foods);

/////// 10-vazifa

// const array = [1, 2, 3];
// let new_array = [...array, 4, 5];
// console.log(new_array);

////// 11-vazifa

// const obj1 = {
//   name: "Doston",
// };
// const obj2 = {
//   age: 22,
// };
// const obj3 = {
//   profession: "Bekorchi",
// };
// let new_obj = { ...obj1, ...obj2, ...obj3 };
// console.log(new_obj);

////// 12-vazifa

// function addNumbers(...numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }
// let number = "1234567890000000";
// let result = addNumbers(...number.split("").map(Number));
// console.log(result);

//////// 13-vazifa

// let fruits = ["Olma", "Ananas", "Kivi", "Apelsin"];
// let [firtst, ...rest] = fruits;
// console.log(firtst);
// console.log(rest);

//////// 14-vazifa

// let user = {
//   name: "Bahtiyor",
//   age: 20,
//   location: "Ferghana",
// };
// let { name, age, location } = user;
// let info = { age, location };
// console.log(name);
// console.log(info);

////// 15-vazifa

// let arr = [1, 2, 3];
// let [x, y, z] = arr;
// function add(x, y, z) {
//   console.log(x + y + z);
// }
// add(x, y, z);

//////// 16-vazifa

let colors = ["yellow", "purple", "pink", "green"];
let new_colors = ["black", ...colors, "white"];
console.log(new_colors);
