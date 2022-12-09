import { useState, useEffect } from 'react';
import './App.css';
import Box from "./component/Box"

function App() {
  let counter = 0;
  const [counter2,setCounter2] = useState(0)
  const [value,setValue] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    setValue(value+2);
  };

  //1. 유저가 버튼을 클릭한다
  //2. counter + 1해서 1이됨
  //3. setState함수 호출
  //4. console.log실행됨
  //5. 변수값은 1로 보이고 state값은 아직 안변했기 때문에 그전의 값이 보인다
  //6. 함수 끝
  //7. app 다시 re render
  //8. let counter = 0을 거치면서 counter값은 다시 0으로 초기화가 된다
  //9. state값은 update가 되면서 다시 render를 한다.


  //변수는 re render될떄마다 초기화가 된다 state값은 비동기적으로 처리된다.

  useEffect(()=>{
    console.log("useEffect1");
  },[]);

  useEffect(()=>{
    console.log("useEffect2",counter2, value);
  },[counter2,value]);
  
  return (
    <div>
      {console.log("render")}
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>  
    );
  }

export default App;
