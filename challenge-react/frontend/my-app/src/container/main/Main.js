import './Main.css';
import Main from './Main'
import React from 'react';
import Header from './Header';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShown: false
    }

renderHeader = () => {
    if (this.state.isShown) {
      return <Header userName={'Duong'} lastName={'Tran'} />
    } else {
      return null
    }
  }
  }

render() {
    return (
      <div>
      <button onClick={() => {this.setState({isShown: !this.state.isShown})} } />
      {this.renderHeader()}
      {this.Menu()}
      {this.Content()}  
      </div>
    )
  }
}

export default Main;
