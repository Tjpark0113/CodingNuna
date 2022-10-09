//Destructuring
let person = {
    name: "noona",
    age: 20
  }
  
  // let name = person.name
  // let age = person['age']
  
  let {age} = person
  
  console.log(age)
  
  let array = [1,2,3,4]
  let [a,b,...rest]=array
  
  console.log(rest)