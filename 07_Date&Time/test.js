const dt=new Date()
//console.log(dt)
console.log("toString ",dt.toString())
console.log("toLocaleString ",dt.toLocaleString())
console.log("toLocaleDateString ",dt.toLocaleDateString())

console.log("toDateString ",dt.toDateString())
console.log("toTimeString ",dt.toTimeString())

console.log("typeof ",typeof dt)

// user defind monts start from 0 in js

const mydate=new Date(2023,0,24,5,2)
console.log("userdefed ",mydate.toDateString())

console.log("my date",mydate.getDate())
console.log("my day",mydate.getDay())
console.log("getTime",mydate.getTime())
console.log("getFullYear",mydate.getFullYear())
console.log("getHours",mydate.getHours())
console.log("getMinutes",mydate.getMinutes())
console.log("Milliseconds",mydate.getMilliseconds())