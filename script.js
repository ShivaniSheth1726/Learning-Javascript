"use strict";
// let fruit="apple";
// console.log(fruit.length);
// console.log(fruit.toLowerCase());
// console.log(fruit.toUpperCase());
// console.log(fruit.charAt(4));
// console.log(fruit.at(-1));
// console.log(fruit.toLocaleUpperCase());
// console.log(fruit.includes("A"));//check the alphabet
// console.log(fruit.includes("a"));//Give boolean values 
// // const my_friend="Shivani"
// // const MySelf="Shivani"
// // const Mysubject="computer"




// if(fruit.includes("a")||fruit.includes("A"))
// {
//     console.log("a hai");
// }else{
//     console.log("nahi hai");
// }


// if(fruit.includes("P"))
//     {
//         console.log("p hai");
//     }else if(fruit.includes("p")){
//         console.log("p hai");
//     }else{
//         console.log("nahi hai");
//     }

// const Name=prompt("Enter your Name");

// if(Name.includes(" "))
// {
//     console.log('its a full name');
// }else{
//     console.log('Enter your Full Name');
    
// }



// if(name.includes(" ")&&(name.at(-1)!==" "))
// {
//     console.log('its a full name');
// }
// else{
//     console.log('Enter your Full Name');   
// }


// const fullName=prompt("Enter your Name");
// if(fullName.includes(" ")){
//     if(fullName.at(-1)!==" "){
//         console.log('This is the full Name');
//     }else{
//         console.log('enter your full name');
//     }
// }else{
//     console.log('enter your full Name');
    
// }



// const userInput=fullName.trim();
// if(userInput.includes(" ")){
//     if(userInput.length>=7){
//         console.log('Its a full name');
//     }else{
//         console.log('please enter valid name');
//     }
// }else{
//     console.log('Enter your full Name');   
// }

// Function 

// function namaste() {
//     console.log('Namaste ji!');
// }
// namaste();
// console.log(namaste());//this will not give output therefore it will show undefined value

// function greeting(greeting,name) {//here parameter -ewhen declare function
//     console.log(greeting, name);
// }
// greeting("Hello","Shivani");//this is argument-when calling function
// greeting("Namaste","Shivani");
// greeting("How are you","Shivani?");

// // const great="Hello";
// // const name=prompt("Enter your name")
// function hello(great,name){
//   if(great==undefined){
//     great="Hello";
//   }
//   if(name===undefined){
//     name="User";
//   }
//         console.log(great,name);
// }
// hello("hello","Shivani");


// const day=prompt("Enter the Number between 1 to 7 ")
// function days(day){
// if(day==1){
//   console.log('Mon');  
// }else if(day==2){
//   console.log('tue');  
// }else if(day==3){
//   console.log('wed');  
// }else if(day==4){
//   console.log('thursday');  
// }else if(day==5){
//   console.log('Fri');  
// }else if(day==6){
//   console.log('Sat');  
// }else{
//   console.log('Sunday');
// }
// }
// days(day);

// function capitalizeWords(greet , name ) {
  
     
// }

// const day=Number(prompt("Enter the Number between 1 to 7 "));

// function days(day){
// if(day==1){
//   console.log('Mon');  
// }else if(day==2){
//   console.log('tue');  
// }else if(day==3){
//   console.log('wed');  
// }else if(day==4){
//   console.log('thursday');  
// }else if(day==5){
//   console.log('Fri');  
// }else if(day==6){
//   console.log('Sat');  
// }else{
//   console.log('Sunday');
// }
// }
// days(day);

// false value
// const value=NaN,0,null,undefined,false,"";
// if(value){
//   console.log('true value');
// }else{
//   console.log('false value');
// }

// function days(day){
//   day=Number(day);
// switch (day) {
//   case 1:
//     console.log('Mon');
    
//     break;
//     case 2:
//       console.log('Tue');
      
//       break;
//       case 3:
//     console.log('Wed');
    
//     break;
//     case 4:
//     console.log('Thur');
    
//     break;
//     case 5:
//     console.log('Fri');
    
//     break;
//     case 6:
//     console.log('Sat');
    
//     break;
//     case 7:
//     console.log('Sun');
    
//     break;
//   default:
//     break;
// }
// }
// days("2");


// function weekDays(day){
//   day=Number(day);
//   if(day<=7){
// const days=["monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// // console.log(days.length);
// console.log(days[day-1]);
// console.log(days);
// }
// else{
//   console.log('invalid input');
  
// }
// }
// weekDays("5");

function sum(num1 ,num2){
 
  return num1+num2;
  
}
const x = sum(1,2);
console.log(x);


// function weekDays(day){
//   day=Number(day);
//   if(day<=7){
// const days=["monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// const dayIs=days[day-1]
// return dayIs;
// }
// else{
//   console.log('invalid input');
  
// }
// }
// const output=weekDays(4)
// console.log(output);


// using nullish coelescing operator
function weekDays(day){
day=Number(day);
const days=["monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
// const dayIs=days[day-1]
return days[day-1]??"invalid input";
}
const output=weekDays(5)
console.log(output);

function greeting(greet="Hello",name="User"){
  // console.log(greet+" "+name+" nice to meet you!");
  // using template literals
  const str2 =`${greet} ${name}, nice to meet you!`;
  // return greet+" "+name+" nice to meet you!"
  console.log(str2);
}
// console.log( greeting());
greeting();

