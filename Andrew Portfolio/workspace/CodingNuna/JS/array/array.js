// // let fruit = "banana"
// // let fruit2 = "apple"
// // let fruit3 = "grape"
// // let fruit4 = "mango"

// let fruit = ["banana","apple","grape","mango"]

// // console.log(fruit)
// // console.log(fruit[0])

// // fruit[0] = "cherry"
// // console.log(fruit)

// // fruit[2] = "tomato"
// // console.log(fruit)

// // pop() : 마지막에 있는 아이템을 뺌
// // fruit.pop()
// // console.log(fruit)

// // push() : 마지막에 ()안의 아이템을 넣음
// // fruit.push("pineapple")
// // console.log(fruit)

// // includes() : 배열 안에 ()안의 아이템이 있는지 검색.
// // console.log(fruit.includes("apple"))
// // 결과 : true
// // console.log(fruit.includes("pear"))
// // 결과 : false

// // indexOf() : ()안의 아이템이 몇번째 인덱스인지 알려줌
// // console.log(fruit.indexOf("apple"))

// // slice(시작점,끝나는점) : 1개만 사용할 경우 시작점. ()안의 숫자번째 이후부터 잘라서 반환해줌. slice는 기존의 배열을 건드리지 않고 새로운 배열을 만들므로 console.log()안에 사용하지 않을 경우 기존의 배열을 그대로 반환해줌.
// // console.log(fruit.slice(2))
// // console.log(fruit.slice(1,3))
// // let extrafruit = fruit.slice(1,3)
// // console.log(extrafruit)

// // splice(시작점, 개수) : ()안의 숫자번째 이후부터 숫자 갯수만큼 잘라서 반환해줌. slice와는 달리 기존의 배열을 수정하므로 console.log()안에 굳이 넣을 필요 없음.
// fruit.splice(2,1)
// console.log(fruit)