import React from 'react';
import Comp from './comp'


class App extends React.Component {
  state = {
    name: 'arup',
    age: 34,
    count: 0
  }

  inc =() =>{
    this.setState ((prevState)=> ({count: prevState.count + 1}))
  }
  render(){
  return (
    <div>
      <h1>Class Components</h1>
      <Comp name ={'RJ'}/>
      <h1>{this.state.name}</h1>
      <h1>{this.state.age}</h1>
      <h1>{this.state.count}</h1>
      <button onClick={this.inc}>INC</button>
    </div>
  );
  }
}

export default App;
