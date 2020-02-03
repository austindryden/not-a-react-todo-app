import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: []
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
              {this.state.items.map((words, index)=>(<li>{words}</li>))}
          </ul>
          </div>
      </div>
    );
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    console.log('You just submitted');
    let newArr = this.state.items;
    newArr.push(this.state.text);
    this.setState({
      items:newArr,
      text:''
    })
    console.log(this.state.items);
  }

  _updateText = (event) => {
    console.log(event.target.value);
    this.setState({
      text: event.target.value
    })
  }
}

export default App;
