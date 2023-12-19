import { Component, useState } from "react";
import FunctionInfo from "./FunctionInfo";

// const getRandomColor = () => {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// };

// class App extends Component {
//   state = {
//     color: "#000000",
//   };

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };

//   render() {
//     return (
//       <>
//         <FunctionInfo />
//         {/* <ErrorBoundary>
//           <button onClick={this.handleClick}>랜덤</button>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary> */}
//         {/* <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>맨밑</button> */}
//       </>
//     );
//   }
// }

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <FunctionInfo />}
    </div>
  );
};

export default App;
