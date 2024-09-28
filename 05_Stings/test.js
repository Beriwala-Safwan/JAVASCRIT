//normal string
const str="hello" + " world";
console.log(str);

const myname="safwan";
const age=23;

//template litrals
let reult=`my name is ${myname} and my age is ${age}`;
console.log(reult)

//STRINGS METHOD

let MyName="safwan beriwala";
console.log(MyName.length)//chek the length of string
console.log(MyName.charAt(1)); 
// The charAt() method returns the character at a specified index (position) in a string:

console.log(MyName.toUpperCase())//convert to upprCAse
console.log(MyName.indexOf('f'))//check letter at which index

const newString=MyName.substring(1,4);
console.log(newString)
const newString1="    safwan     ";
console.log(newString1.trim())//rmovng spaces
const url="https://safwan.com/safwan%20beriwal";
console.log(url.replace("%20","-"));
//replace replace the string you want
console.log(url.includes("safwan"));

const r=MyName.split("").reverse().join("")
console.log(r)
