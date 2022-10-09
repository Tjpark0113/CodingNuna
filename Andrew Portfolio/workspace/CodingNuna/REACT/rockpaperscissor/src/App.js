import { useState } from 'react';
import './App.css';
import Box from "./component/Box";

//1. 박스2개(타이틀,사진,결과)
//2. 가위 바위 보 버튼
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3,4의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패 결과에 따라 테두리 색이 바뀐다(이기면 초록, 지면 빨강, 비기면 검정)

const choice = {
  rock : {
    name: "Rock",
    img : "https://dictionary.cambridge.org/ko/images/thumb/rock_noun_004_2211.jpg?version=5.0.252"
  },
  scissors: {
    name: "Scissors",
    img: "https://dictionary.cambridge.org/ko/images/thumb/scisso_noun_001_14661.jpg?version=5.0.252'/>    "
  },
  paper : {
    name: "Paper",
    img: "https://m.media-amazon.com/images/I/61OorFhm6SL._AC_SX466_.jpg"
  }

}
function App() {
  const [userSelect,setUserSelect] = useState(null)

  const [computerSelect,setComputerSelect] = useState(null)

  const [result,setResult] = useState("")

  const play =(userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice);

    setResult(judgement(choice[userChoice],computerChoice));
  };

  const judgement = (user, computer) => {
    console.log("user", user,"computer", computer);

    //user == computer : tie
    //user == rock, computer == scissors :user win
    //user == rock, computer == paper : user lose
    //user == scissors, computer == paper : user win
    //user == scissors, computer == rock : user lose 
    //user == paper, computer == rock : user win
    //user == paper, computer == scissors : user lose

    if (user.name == computer.name) {
      return "tie"
    } else if (user.name=="Rock")
     return computer.name=="Scissors"?"win":"lose"
    // {
    //   if(computer == "Scissors"){
    //     return "win"
    //   } else {
    //     return "lose"
    //   }
    // }
    else if(user.name=="Scissors")
     return computer.name=="Paper"?"win":"lose"
    else if(user.name=="Paper")
     return computer.name=="Rock"?"win":"lose"
  };

  const randomChoice= () => {
    let itemArray = Object.keys(choice);
    //객체의 키값만 뽑아서 array로 만들어주는 함수:Object.keys()
    console.log("item array", itemArray);

    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random value",randomItem);

    let final = itemArray[randomItem];
    console.log("final",final);

    return choice[final];
  }

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} />
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>    
        <button onClick={() => play("paper")}>보</button>    
      </div>
    </div>
  );
}

export default App;
