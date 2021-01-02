import React, { useState } from "react";
import "./App.css";
import Cutton from "./Cutton";
import Time from "./Time";
import Ccomponent from "./Ccomponent";
import RecursiveButton from "./RecursiveButton";
import Show from "./Show";
import Change from "./Change";
import List from "./List";
import Input from "./Input";

export default function App(props) {

  return (
    <div>
      <Input />
      <List />
      <Change />
      <RecursiveButton />
      <Show />
      <Time />
      <Cutton />
      <Ccomponent />
    </div>
  );
}

//  function App(props) {
//    const time = (
//      <div>
//        <h1>now is </h1>
//        <h1>{new Date().toLocaleTimeString()}</h1>
//      </div>
//    )
//  }

// export default class App extends Component{
//   constructor(props){
//     super();
//     this.state = {
//       date: new Date()
//     }
//     setInterval(() => {
//       this.setState({
//         date:new Date()
//       })
//     });
//   }
//    render (){
//     return (
//       <div>
//         <h1>Hello</h1>
//         <h1>now is : {this.state.date.toLocaleTimeString()}</h1>
//       </div>
//     )
//    }

// };

//   return (
//     <div>

//     <Button />
//     </div>
//   );
// }

// import Button from "@material-ui/core/Button";

// export default class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       count:0
//     }

//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);
//     this.reset = this.reset.bind(this);

//   }
//     increment(){
//       this.setState({
//         count:this.state.count + 1
//       });
//     }
//     decrement(){
//       this.setState({
//         count:this.state.count - 1
//       });
//     }
//     reset(){
//       this.setState({
//         count:0
//       });
//     }

//     render(){
//       return (
//         <div>
//           <p>counter : {this.state.count}</p>
//           <button onMouseEnter={this.increment}>increment</button>
//           <button onClick={this.decrement}>decrement</button>
//           <button onClick={this.reset}>reset</button>
//         </div>
//       )
//     }

// }

// const [count,setCount] = useState(0);

// function increment(){
//   setCount(count + 2)
// };

// function decrement(){
//   setCount(count - 1)
// };

// function reset(){
//   setCount(0)
// };
// return(
//   <div>
//     <h1>Count:{count}</h1>
//     {/* <button onClick={increment} className="btn btn-success">increment</button>
//     <button onClick={decrement}>decrement</button> */}
//     <Button variant="contained" color="primary" onClick={increment}>
//       Primary
//     </Button>
//     <Button variant="contained" color="secondary" onClick={decrement}>
//       Secondary
//     </Button>
//     <Button variant="contained" color="secondary" onClick={reset}>
//       Disabled
//     </Button>
//     {/* <button onClick={reset}>reset</button> */}
//   </div>
// )

// export default App;
