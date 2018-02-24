import React, { Component } from 'react';
import SingleTodo from './SingleTodo';

class Hello extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      currentTodo: ''
    }
  }

 onInputChange = e => {
   this.setState({
     currentTodo: e.target.value
   })
 }


 onClickHandler = () => {
   let todosCopy = this.state.todos;
   todosCopy.push(this.state.currentTodo);
   this.setState({
     todos: todosCopy,
     currentTodo : ''
   })
 }


 deleteList = (i) => {
   let todosCopy = this.state.todos;
   todosCopy.splice(i, 1);
   this.setState({
     todoList: todosCopy
   })
 }

  render() {

    let todoList = this.state.todos.map((item, i) => {
      return(
        <SingleTodo todo={item} delete={() => this.deleteList(i)}></SingleTodo>
      )
    })

    return (
      <div>
        <input onChange={this.onInputChange} value={this.state.currentTodo} />
        <button onClick={this.onClickHandler}>Add todos</button>
        <br/>
        {this.state.todos.length === 0 ? "No todoes yet" : <ol>{todoList}</ol>}
      </div>
    )
  }
}


export default Hello;