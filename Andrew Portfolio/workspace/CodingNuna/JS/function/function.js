// function makeBurger(type, size, num) {
//     console.log("선택한 패티?", type)
//     console.log("빵두기")
//     console.log("상추두기")
  
//     if (num < 1) {
//       return "Error!"
//     }
  
//     if (type == "불고기") {
//       console.log("고기패티두기")
//     } else if (type == "새우") {
//       console.log("새우패티두기")
//     }
  
//     console.log("뚜껑덮기")
//     console.log(type, "버거", size, "사이즈", num, "개 준비완료")
  
//     return "완료되었습니다"
//   }
  
//   function serveCoke() {
//     console.log("콜라통선택")
//     console.log("얼음담기")
//     console.log("콜라담기")
//   }
  
//   function servefrenchFries() {
//     console.log("감튀박스선택")
//     console.log("감튀담기")
//   }
  
//   // makeBurger()
//   // serveCoke()
//   // servefrenchFries()
  
//   let result = makeBurger("새우", "M", 0)
//   console.log("버거 프로세스 결과 :", result)
  
//   function makeSet() {
//     makeBurger("새우", "M", 2)
//     servefrenchFries()
//     serveCoke()
//   }
  
//   makeSet()