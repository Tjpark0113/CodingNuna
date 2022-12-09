import React, { Component } from 'react'
import BoxClass from './component/BoxClass';

export default class AppClass extends Component {

    constructor(props){
        super(props);
        this.state = {
            counter2: 0,
            num:1,
            value:0
        };
        console.log("constructor");
    }

    increase  = () => {
        this.setState({
            counter2:this.state.counter2 + 1,
            value: this.state.value + 1
        }); 
        console.log("increase function", this.state);
    };
    
    componentDidMount(){
        //api 콜

        console.log("componentDidMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate",this.state);
    }

    render() {
        console.log("render");
        return (
        <div>
            <div>state:{this.state.counter2}</div>
            <button onClick={this.increase}>클릭!</button>
            {this.state.counter2<3 && <BoxClass num={this.state.value}/>}
            {/* 자바스크립트랑 HTML이랑 섞어서 작업 해주고 싶으면 { }안에 자바스크립트 써야한다 */}
            {/* && 연산자로 조건부 렌더링이 가능하다 3보다 수가 커지면 false가 되면서 뒤에 것이 사라진다 */}
        </div>
        )
    }
}
