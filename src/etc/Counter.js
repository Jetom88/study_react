import { Component } from "react";

class Counter extends Component {
  // 컴포넌트 생성자 메서드
  //   constructor(props) {
  //     super(props);

  //     // 초기 값
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0,
  //     };
  //   }

  //constructor를 선언하지 않고 state 초깃값 설정
  state = {
    number: 0,
    fixedNumber: 0,
  };

  //  setState를 사용해 state 값을 업데이트할 때는 비동기적으로 업데이트 되기 때문에
  //  setState를 두 번 적용해도 값은 +2가 아닌 +1가 됨
  //   <button
  //   onClick={() => {
  //     // state에 새로운 값 넣음
  //     this.setState({ number: number + 1 });
  //     this.setState({ number: this.state.number + 1 });
  //   }}
  // >
  //   +1
  // </button>

  //객체를 반환하도록 했기 때문에  prev => ({ }) 형태로 됨
  //  this.setState((prev) => ({ number: prev.number + 1 }));

  render() {
    // state를 조회 -> this.state
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              console.log("setState");
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
