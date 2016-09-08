import React, { Component } from 'react';
import './App.css';
import Rebase from 're-base';



const base = Rebase.createClass({
    apiKey: "AIzaSyBcuS9bM3w2j5B8qUjpdqavSEE3NbGoMGw",
    authDomain: "orlando-demo-baa37.firebaseapp.com",
    databaseURL: "https://orlando-demo-baa37.firebaseio.com",
    storageBucket: "",

});

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      loading: true
    }
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }
  componentDidMount () {
    this.rebaseRef = base.syncState('chatList', {
      context: this,
      state: 'list',
      asArray: true,
      then(){
        this.setState({loading: false})
      }
    })
  }
  componentWillUnmount () {
    base.removeBinding(this.rebaseRef)
  }
  handleAddItem (event) {
    event.preventDefault()
    let message = event.target.elements[0].value;
    this.setState({
      list: this.state.list.concat([message])
    })
  }
  handleRemoveItem (index) {
    let newList = this.state.list;
    newList.splice(index, 1);
    this.setState({
      list: newList
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Oh Brother, Where Art Thou...Chatting</h2>
        </div>
        <p className="App-intro">
          Is you is, or is you aint chattin.
        </p>
          <div className="chatter">
        <form onSubmit={this.handleAddItem}>
          <input type="text"/>
          <button type="submit">Chatter</button>
        </form>
        </div>
        
      </div>

    );
  }
}

export default App;
