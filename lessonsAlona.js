// Всім привіт!
// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for cancelled input, empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
// 	For user input “test” should return “es”
// 	For user input “character” should return “a”
// 	For user input “B” should return “B”
// 	For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”

// const word = prompt("Enter word");
// if (word === null || word.trim() === "") {
//     alert("Invalid value");
// } else {
//     if (word.length % 2 === 0) {
//         const char1 = word[word.length / 2 - 1];
//         const char2 = word[word.length / 2];
//         alert(`${char1}${char2}`);
//     } else {
//         const char = word[Math.floor(word.length / 2)];
//         alert(`${char}`);
//     }
// }

// const word = prompt("Enter word");
// if (word === null || word.trim() === "") {
//     alert("Invalid value");
// } else {
//     if (word.length % 2 === 0) {
//         const char = word.slice(word.length / 2 - 1, word.length / 2 + 1);
//         console.log(char);
//         alert(`${char}`);
//     } else {
//         const char = word.slice(Math.floor(word.length / 2), Math.floor(word.length / 2) + 1);
//         alert(`${char}`);
//     }
// }

// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// 	If it’s another string – then show “I don’t know you”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.
// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours()
// 	For “User” show “Good day, dear User!”
// 	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// 	For “User” show “Good evening, dear User!”
// 	For “Admin” show “Good evening, dear Admin!

// const login = prompt("Enter your Login");
// const time = new Date().getHours();
// if (login.trim() === "" || login === null) {
//     alert("Canceled");
// } else if (login.length < 4) {
//     alert("I don't know any users having name length less than 4 symbols");
// } else if (login !== "User" && login !== "Admin") {
//     alert("I don’t know you");
// } else {
//     const password = prompt("Enter password");
//     if (password.trim() === "" || password === null) {
//         alert("Canceled");
//     } else if (login === "User") {
//         if (password !== "UserPass") {
//             alert("Wrong password");
//         } else {
//             if (time > 5 && time < 20) {
//                 alert("Good day, dear User!");
//             } else {
//                 alert("Good evening, dear User!");
//             }
//         }
//     } else {
//         if (password !== "RootPass") {
//             alert("Wrong password");
//         } else {
//             if (time > 5 && time < 20) {
//                 alert("Good day, dear Admin!");
//             } else {
//                 alert("Good evening, dear Admin!");
//             }
//         }
//     }
// }

// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;
// const d = [b[0]].concat(b[1]);

// const result = [...a, ...d, c];

// console.log(result);

// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];
// a.splice(3, 3, a[0], a[1], a[2]);
// console.log(a);
// const b = [...a.slice(0, 3), ...a.slice(0, 3), ...a.slice(-2)];
// console.log(b);
// console.log(a.copyWithin(3, 0, 3));

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];
// a.splice(5, 3, 0, 0, 0);
// a.fill(0, 5, 8);
// console.log(a);

// const a = [1, 2, [3, 4], [5, 6], 7];

// // Функція, яка повертає однорідний массив

// function arraySpread(array) {
//     let newArray = [];
//     for (let number of array) {
//         if (Array.isArray(number)) {
//             newArray.push(...number);
//         } else {
//             newArray.push(number);
//         }
//     }
//     return newArray;
// }
// console.log(arraySpread(a));

// Write a function that converts the argument values. If it will be a string, convert it to number and wise versa.
// It should return an array of converted values.
// convert('1', 2, 3, '4') // [1, '2', '3', 4]

// function convert(...array) {
//     let newArray = [];
//     for (let element of array) {
//         if (typeof element === "number") {
//             newArray.push(String(element));
          
//         }
//         else {
//             newArray.push(Number(element));
//         }
     
            

            
//     } return newArray;
        
// }
// console.log(convert('1', 2, 3, '4'));

// Write a function which creates an array from the given range of number
// // makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]
// // makeListFromRange([8, 5]) // [5, 6, 7, 8]

// function makeListFromRange(array) {
//     let newArray = [];
//     if (array[0] > array[1]) {
//         for (let i = array[0]; i >= array[1]; i -= 1) {
//             newArray.push(i);
//         }
//     } else {
//         for (let i = array[0]; i <= array[1]; i += 1) {
//             newArray.push(i);
//     }
//     }
//     return newArray;
// }
// console.log(makeListFromRange([8, 5]));

// function makeListFromRange(array) {
//     let newArray = [];
//     const [a, b] = array[0] <= array[1] ? array : [array[1], array[0]];
//     for (let i = a; i <= b; i += 1) {
//         newArray.push(i);
//     }
//     return newArray;
// }
// console.log(makeListFromRange([2, 7]));
// console.log(makeListFromRange([8, 5]));

// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// function userInfo(array) {
//   const allUser = {};
//   const keys = Object.keys(array[0]);
//   for (const key of keys) {
//     allUser[key] = [];
//   }
//   for (const key in allUser) {
//       for (const user of array) {
//           if (Array.isArray(user[key])) {
//             allUser[key].push(...user[key]);
//           } else {
//               allUser[key].push(user[key]);
//           }
//       }
//       allUser[key] = [...new Set(allUser[key])];
// }
  
//   console.log(allUser);
// }
// userInfo(users);

// You should create a function constructor ‘Student’ which you can call with two arguments name and email.
// Name, email and homeworkResults fields should be hidden from user.
// Instance of Student should provide the following methods to get or change it’s state:
// getName(): returns student’s name.
// getEmail(): returns student’s email.
// addHomeworkResult(topic, success): you can call this method with 2 arguments: topic(string) and success(boolean). This method should add new element to student’s homeworkResults property.
// const Student = function (name, email) {
//     const homeWorkResults = [];
//     this.getName = function () {
//         return name;
//     }
//     this.getEmail = function () {
//         return email;
//     }
//     this.getHomeworkResult = function () {
//         return homeWorkResults;
//     }
//     this.addHomeworkResult = function (topic, success){
//         homeWorkResults.push({ topic, success });
//     }
// }

// class Student {
//     #name;
//     #email;
//     #homeWorkResults = [];
//     constructor(name, email) {
//         this.#name = name;
//         this.#email = email;
//     }
//     getName() {
//         return this.#name;
//     }
//     getEmail() {
//         return this.#email;
//     }
//     getHomeworkResult() {
//         return this.#homeWorkResults;
//     }
//     addHomeworkResult(topic, success) {
//         this.#homeWorkResults.push({ topic, success });
//     }
// }

// const student = new Student("John", "john@mail.com");
// console.log(student.getName());
// student.addHomeworkResult("HTML", true);
// console.log(student.getHomeworkResult());
// console.log(student.getName());
