import React, { Component } from 'react'
import "./App.css";
import BoxClass from './component/BoxClass';

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

export default class AppClass extends Component {
    constructor() {
        super();
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: ","
        };

    }

    play =(userChoice) => {
        let computerChoice = this.randomChoice();
        this.setState({
            userSelect: choice[userChoice],
            computerSelect: computerChoice,
            result: this.judgement(choice[userChoice],computerChoice)
        });
      };
    
    judgement = (user, computer) => {
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
    
    randomChoice= () => {
        let itemArray = Object.keys(choice);
        //객체의 키값만 뽑아서 array로 만들어주는 함수:Object.keys()
        console.log("item array", itemArray);
    
        let randomItem = Math.floor(Math.random() * itemArray.length);
        console.log("random value",randomItem);
    
        let final = itemArray[randomItem];
        console.log("final",final);
    
        return choice[final];
      }

    render() {
        return (
        <div>
            <div className='main'>
            <BoxClass title="You" item={this.state.userSelect} result={this.state.result}/>
            <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result} />
        </div>
        <div className='main'>
            <button onClick={() => this.play("scissors")}>가위</button>
            <button onClick={() => this.play("rock")}>바위</button>    
            <button onClick={() => this.play("paper")}>보</button>    
        </div>
        </div>
        )
    }
}
