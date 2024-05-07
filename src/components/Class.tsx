import React, { Component } from 'react'

export default class Class extends Component {
    handleClick=()=>{
        console.log("1111111");        
    }
    handleUpdate=(userID:any)=>{
        console.log("userID",userID);
    }
  render() {
    return (
      <div>Class
        <button onClick={this.handleClick}>click</button>
        <p onClick={()=>this.handleUpdate(11)}>minh thu</p>
        
      </div>
    )
  }
}
