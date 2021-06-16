import React, { Component } from "react";

export default class hcl3 extends Component {
  state = {
    input: ""
  };
  render() {
    handleChange = e => {
      let input = e.target.value;
      this.setState({ input: input });
    };
    handleClear = () => {
      // this.setState({ input: "" });
      if(this.state.input === ""){
        alert("please enter value")
      }
    };
    handleSubmit = () => {
      console.log(this.state.input);
    };
    checkAlphabets=()=>{
      
    }
    return (
      <form>
        <input onChange={this.handleChange}>{this.state.input}</input>
        <input onChange={this.checkAlphabets}></input>
        <button onClick={this.handleClear}>Clear</button>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}
