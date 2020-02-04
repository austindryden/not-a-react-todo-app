import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: [],
      completed:[]
    };

  }
  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input 
            onChange={this._updateText} 
            value={this.state.text}
            placeholder="Type something here!"
          />
        </form>
        <div>
          <ul>
              {this.state.items.map((words, index)=>{
                return(
                  <li><input type="checkbox" checked={this.state.completed[index] ? "checked" : ""} onClick={() => (this._checkbox(index))} ></input>
                  {words}
                  {this._deleteButton(index)}
                  </li>
                )
              })}
          </ul>
          </div>
      </div>
    );
  }

  _handleSubmit = (event) => {
    event.preventDefault();    
    console.log('You just submitted');
    let newItems = [...this.state.items];
    let newCompleted = [...this.state.completed];
    newCompleted.push(false);
    newItems.push(this.state.text);
    this.setState({
      items:newItems,
      completed:newCompleted,
      text:''
    })
  
  }

  _updateText = (event) => {
    console.log(event.target.value);
    console.log(event.target);
    this.setState({
      text: event.target.value
    })
  }

  _checkbox = (index)=>{
    let newCompleted = [...this.state.completed];
    newCompleted[index] = !newCompleted[index];
    console.log(newCompleted[index]);
    this.setState({
      completed:newCompleted
    })
  }

  _deleteButton = (index) =>{
    if(this.state.completed[index]){
      return <button onClick={() => this._removeItem(index)}>delete</button>
    }
    return '';
  }

  _removeItem = (index) => {
    let newItems = [...this.state.items];
    let newCompleted = [...this.state.completed];
    newItems.splice(index, 1);
    newCompleted.splice(index, 1);
    this.setState({
        items:newItems,
        completed:newCompleted
    })
  }
}

export default App;