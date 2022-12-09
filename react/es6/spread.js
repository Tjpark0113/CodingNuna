//spread
let person = { name: "noona", age: 12 }

let person2 = { ...person, name: "jimin" }
//새로운 객체를 만듦
let person3 = person
//객체의 주소값만 가져옴

console.log(person2)
console.log(person3)

console.log(person == person2)
console.log(person == person3)

let a = [1, 2]
let b = [...a, 3]

console.log(b)

let c = [...a,...b]

console.log(c)