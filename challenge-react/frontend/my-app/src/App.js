import './App.css';
import React from 'react';
import Container from './container/Container';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


render() {
    return (
    
      <div>
        <Container className={'container'}/>
      </div>
    )
  }
}

export default App;
