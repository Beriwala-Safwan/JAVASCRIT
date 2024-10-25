const myarr=[1,2,3,4,5]
console.log(myarr[2])

myarr.push(6)
console.log(myarr)
myarr.pop()
console.log(myarr)

//unshift adds elemt at starting
myarr.unshift(0)
console.log("unshft example ",myarr)
console.log(myarr.includes(9))
console.log(myarr.indexOf(2))
console.log(myarr)

const newarr=myarr.join()
console.log("join all the elements in string ",newarr)

//SLICE-SPLICE
//note:splice maniulte the aray
console.log("A ",myarr)
const myn1=myarr.slice(1,3)
console.log(myn1)

console.log("B ",myarr)
const myn2=myarr.splice(1,3)
console.log(myn2)
