import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={classD:"App"}
  }
  Toggle=()=>{
    if(this.state.classD==="App")
    {
    this.setState({classD:"D-App"})
    }
    else{
      this.setState({classD:"App"})
    }
  }
  state = {  }
  render() { 
    return ( 
      <>
        <div className={this.state.classD}>
       <div className='togglediv' onClick={this.Toggle}>
        <button className={`btn btn-${(this.state.classD==="App")?"D-App":""}`} >&nbsp;</button>
        <button className={`btn btn-${(this.state.classD==="D-App")?"D-App":""}`}>&nbsp;</button>
       </div>
       <h3>Dark Mode</h3>
       <h3>Light Mode</h3>
    </div></>
     );
  }
}
 
export default App;
