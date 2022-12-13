import './Main.css';
import React from 'react';
import Header from './header/Header';
import Menu from './menu/Menu'
import Content from './content/Content';

// import App from "../../App"
//Main.js dang o trong dir src/container/main

// ./ -> src/container/main
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShown: false
    }
  }
renderHeader = () => {
    if (this.state.isShown) {
      return <Header userName={'Duong'} lastName={'Tran'} />
    } else {
      return null
    }
  }
  

render() {
    return (
      <div>
      <button onClick={() => {this.setState({isShown: !this.state.isShown})} } />
      {this.renderHeader()}
      <Menu/>
      <Content/>
      </div>
    )
  }
}

export default Main;
