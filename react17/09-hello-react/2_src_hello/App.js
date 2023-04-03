import { Component } from 'react';
import Hello from "./components/Hello";
import Hello2 from "./components/Welcome";

export default class App extends Component {
  render () {
    return (
      <div>
        <Hello />
        <Hello2 />
      </div>
    )
  }
}