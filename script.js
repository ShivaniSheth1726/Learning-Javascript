"use strict";
let fruit="apple";
console.log(fruit.length);
console.log(fruit.toLowerCase());
console.log(fruit.toUpperCase());
console.log(fruit.charAt(4));
console.log(fruit.at(-1));
console.log(fruit.toLocaleUpperCase());
console.log(fruit.includes("A"));//check the alphabet
console.log(fruit.includes("a"));//Give boolean values 
// const my_friend="Shivani"
// const MySelf="Shivani"
// const Mysubject="computer"




if(fruit.includes("a")||fruit.includes("A"))
{
    console.log("a hai");
}else{
    console.log("nahi hai");
}


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


const fullName=prompt("Enter your Name");
// if(fullName.includes(" ")){
//     if(fullName.at(-1)!==" "){
//         console.log('This is the full Name');
//     }else{
//         console.log('enter your full name');
//     }
// }else{
//     console.log('enter your full Name');
    
// }



const userInput=fullName.trim();
if(userInput.includes(" ")){
    console.log('Its a full name');
}else{
    console.log('Enter your full Name');
    
}