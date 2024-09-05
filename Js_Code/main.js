// // var and constant

// let myVariable = 4;  // let is used to declare variable if you don't want to declare variable with same name
// console.log(myVariable);

// myVariable = 5;
// console.log(myVariable);


// let myFullName = "abhishek"
// console.log(myFullName);

// const screen_width = 1280;
// screen_width = 720;  // give error because variable declare using const can not be changed

// const number1 = 5;
// const number2 = 4;

// let result = number1 + number2;
// console.log(result);

// result = number1 * number2;
// console.log(result);

// result = number1 ** number2;
// console.log(result);



// const text = "hello world";
// const number = 1;

// console.log(text + number);  // concatinate


// const age = 25;
// const height = 182;
// if (age>18){
//     console.log("You are an adult!");
// } 
// else if(age === 18){         // triple equal also compare data type also 
//     console.log("You just turned into an adult!");
    
// }
// else {
//     console.log("You are a minor!");
    
// }

// const age = "18";

// if (age == 18) {    // This code will run because double equal does not compare data type.
//     console.log("You just turned into an adult");
    
// }


// !=  (Not equal), = (assign), ==(compare only value), === (compare value as well as data type), >= (greater than equal to), <= (less than equal to) 



// Array

// const numbers = [1,2,3,"4", "Abhi"]; 
// console.log(numbers);
// console.log(numbers[4]);

// numbers[1] = 21;
// console.log(numbers);

// let names = ["abhishek", "kuntal", "me"];
// console.log(names[0]);
// console.log(names);

// names.pop();  // remove last element from array
// console.log(names);

// names.push("last");  // add element in the last 
// console.log(names);

// console.log(names.length);  // no. of element in array

// let num = [3,2,1];
// console.log(num);

// num = num.sort();   // sort array in increasing order
// console.log(num);



// Object

// const  myData = {
//     name : "Abhi",
//     age : 22,
//     nationality : "India"
// };

// console.log(myData);


// console.log(myData.name);   // retrive data using keys from object
// console.log(myData.age);

// console.log(myData['age']);   // another method for retreiving value of keys from object

// // add key value pair to the object

// myData.height = "181 cm";

// console.log(myData);


// Loops

// for loop
// for (let i =0; i <100 ; i++) {
//     console.log(i);  // loop will run 100 time where i goes to 0 to 99
// }


// const names = ["abhi","kuntal","me"]
// console.log(names);

// for (let i = 0; i<names.length ; i++){
//     console.log(names[i]);
// }

// for (const name of names){
//     console.log(name);
// }

// let i = 0;
// while (i< names.length) {
//     console.log(names[i]);
//     i++; 
// }


// Functions

// // calling functions before it declared
// add(3,4)

// // defining function
// function add (number1, number2) {
//     console.log(number1 + number2);
// }

// // calling functions
// add(3,4);

