import React ,{Component}from 'react'
import './App.css';
import TodoItem from './TodoItem'
import todosData from './todosData'

class App extends Component{
  constructor(){
    super()
    this.state={
      allData: todosData
    }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(id){
    this.setState(prevState => {
      const updatedTodos = prevState.allData.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return{
        allData: updatedTodos
      }
    })
  }

  render(){
    const todoItems = this.state.allData.map(item => <TodoItem key={item.id} item={item} handleChange= {this.handleChange}/>)
    
    return(
      <div className="App todo-list">
        {todoItems}
      </div>
    )
  }
}

export default App;
