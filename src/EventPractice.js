import { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  //key를 []로 감싸면 레퍼런스가 가리키는 실제 값이 key 값으로 사용됨
  //{key: 'value'}
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // transform-class-properties 문법을 사용해 화살표 함수 형태로 메서드를 정의함
  handleClick = () => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>

        <input name="username" placeholder="사용자" value={this.state.username} onChange={this.handleChange} />

        <input name="message" placeholder="아무거나" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />

        <button onClick={this.handleClick}>ㅇㅋ</button>
      </div>
    );
  }
}

export default EventPractice;
