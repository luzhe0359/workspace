/*
 * @Description:
 * @Author: zugelu
 * @Date: 2021-07-30 16:01:16
 * @LastEditors: zugelu
 * @LastEditTime: 2021-08-02 11:13:29
 */
import { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  // 状态在哪里，操作状态的方法就在那里
  state = {
    todos: [
      { id: 1, name: '吃饭', done: true },
      { id: 2, name: '睡觉', done: true },
      { id: 3, name: '打代码', done: false },
      { id: 4, name: '打游戏', done: true }
    ]
  }

  // 添加todo
  addTodo = (todoObj) => {
    const { todos } = this.state
    // 添加后的数据
    const newTodos = [todoObj, ...todos]
    // 更新
    this.setState({
      todos: newTodos
    })
  }

  // 修改todo
  updateTodo = (id, done) => {
    const { todos } = this.state
    // 添加后的数据
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done }
      else return todo
    })
    // 更新
    this.setState({
      todos: newTodos
    })
  }
  // 删除todo
  deleteTodo = (id) => {
    const { todos } = this.state
    // 添加后的数据
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    // 更新
    this.setState({
      todos: newTodos
    })
  }

  // 全选todo
  checkAllTodo = (done) => {
    const { todos } = this.state
    // 添加后的数据
    const newTodos = todos.map((todo) => {
      return { ...todo, done }
    })
    // 更新
    this.setState({
      todos: newTodos
    })
  }

  // 清除已完成的
  clearDoneTodo = () => {
    const { todos } = this.state
    // 添加后的数据
    const newTodos = todos.filter((todo) => {
      return !todo.done
    })
    // 更新
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            checkAllTodo={this.checkAllTodo}
            clearDoneTodo={this.clearDoneTodo}
          />
        </div>
      </div>
    )
  }
}
