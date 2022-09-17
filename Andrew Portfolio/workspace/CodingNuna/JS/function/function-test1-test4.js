// // Test1
// // function greet(name) {
// //   console.log("안녕 내 이름은", name, "야")

// //   return name
// // }

// // let result = greet("에밀리")
// // console.log("이름 :", result)


// // Test2
// // function meetAt(year, month, date) {
// //   let Year = year;
// //   let Month = month;
// //   let Date = date;

// //   if(Date) {
// //     return `${Year}/${Month}/${Date}`;
// //   } else if(Month) {
// //     return `${Year}년 ${Month}월`;
// //   } else if(Year) {
// //     return `${Year}년`
// //   }
// // }

// // console.log(meetAt(2022))
// // console.log(meetAt(2032,3))
// // console.log(meetAt(1987,10,28))
// // String 문자열 안에 동적인 값을 넣어주고 싶을 때 ${동적인값}정적인문장을 넣어주면 된다. 그리고 이 문장을 감싸는것은 ""큰따옴표나 ''작은 따옴표가 아닌 `` 백틱이다
// // else if를 사용할 경우 true값이 나올 경우 나머지가 동작하지 않으므로 각각 if문을 사용함.




// // Test3
// // function findSmallestElement(arr) {
// //   let result = arr[0];
// //   if(arr.length === 0) {
// //     return 0;
// //   }
// //   for(let i=1; i<arr.length; i++) {
// //     if(result>arr[i]){
// //       result = arr[i];
// //     }
// //   }
// //   return result;  
// // }

// // console.log(findSmallestElement([100,200,3,2,1]))
// //array가 비어있다는 array의 length가 0이라는 의미
// //result의 값이 arr[i]의 값보다 크면 result의 값을 arr[i]의 값으로 바꿔준다.


// // Test4
// let unit = [50000, 10000, 5000, 1000, 500, 100]

// function changeCalculate(money) {
//   for (let i = 0; i < unit.length; i++) {

//     let num = Math.floor(money / unit[i])
//     money = money - (unit[i] * num)

//     // console.log(unit[i] + "X" + num)
//     console.log(`${unit[i]}X${num}`)
//   }
// }

// changeCalculate(12300)
// // Math.floor()은 소수점을 버려준다.