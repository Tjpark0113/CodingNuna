// // Test1
// // let sum = 0
// // for(let i=1;i<=100;i++){
// //   sum+=i
// // }
// // console.log(sum)


// // Test2
// // for(let i=1;i<=100;i+=2){
// //   console.log(i)
// // }


// // Test3
// for(let i=1;i<=50;i++) {
//     let stringValue = i.toString()
//     let result = ""
  
//     for(let j=0;j<stringValue.length;j++) {
//       if(stringValue[j] === "3" || stringValue[j] === "6" || stringValue[j] === "9") {
//         result+="짝"
//       }
//     }
//     console.log(result.length>0?result:i)
//   }
//   // 39의 경우 3과 9를 통해 짝짝을 하므로 39가 아닌 3과 9로 따로 문자로 인식해주기 위해서 toString()을 사용해준다.
  
  
//   // Test4
//   // let number = 11
//   // let isPrime = true
  
//   // if (number == 1) {
//   //   isPrime = false
//   // }
//   // for (let i = 2; i < number; i++) {
//   //   if (number % i == 0) {
//   //     isPrime = false
//   //   }
//   // }
//   // console.log(isPrime)
//   // 1은 소수가 아님.
//   // i가 2부터 시작해서 주어진number전까지 i가 1씩 증가하는데 number를 i로 나누고 난 나머지가 0ㅇ면 isPrime이 false로 1과 자기자신을 제외하고서는 모두 false로 만들어주는 식.