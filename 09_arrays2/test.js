const marvel_herio=["thor","doctor","hulk"];
const dc_hero=["spiderman","superman","batman"];

//marvel_herio.push(dc_hero);
//console.log(marvel_herio)
//console.log(marvel_herio[3][1])//not  a valid form

const check=marvel_herio.concat(dc_hero)
console.log("array with concat() ",check)

//SPRED OPERATOR

const chk2=[...marvel_herio,...dc_hero]
console.log("with spread operator ",chk2)

//flat example

const another_aaray=[1,2,3,[4,5,6],[7,8,9]]

const chk3=another_aaray.flat(3);
console.log("with flat ",chk3)

//checking itsis aaray or not

console.log(Array.isArray(marvel_herio))//true

// creating an array with FormData()

console.log(Array.from("safwan"))

let s1=100;
let s2=200;
let s3=300;

//using array.of

console.log("using array.of")
console.log(Array.of(s1,s2,s3));
