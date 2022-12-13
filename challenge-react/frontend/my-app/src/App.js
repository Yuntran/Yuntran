import './App.css';
import React from 'react';
import Main from './Main'
import Header from './container/main/header/Header';
import Menu from './container/main/menu/Menu';
import Content from './container/main/content/Content';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  Toolbar = () => {}
  Main =() => {} 

render() {
    return (
      <div id='container'>
      {this.Toolbar()}
      <Main />
      {this.calendar()}
      </div>
    )
  }
}

export default App;
