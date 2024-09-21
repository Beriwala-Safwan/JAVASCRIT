//data types

//7 primitive data type

//string , number, boolean , null ,undefined ,symbol , Bigint

const score=100;
console.log(typeof score)//number
const temp=null;
console.log(typeof temp)//object
const islogedin=true;
console.log(typeof islogedin)//boolean
let result;//undefined
console.log(typeof result)
const names="safwan";
console.log(typeof names)//string

let marks=Symbol(123)
console.log(marks)//symbol(unique)

//NON premitive (referenc)
//ARRAY(main) , OBJECTS(main) ,FUNCTION
const heroes=['ironman','thor','black widow','captain-america']
console.log(typeof heroes)//object
console.log(heroes)

let myobj={
    names:"safwan",
    age:23,
    study:"mca"
}
console.log(myobj["age"])
console.log(myobj.names)

const myFunction=function greet(){
    console.log("hello this is simple function")
};
myFunction()