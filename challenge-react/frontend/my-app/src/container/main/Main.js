import './Main.css'
import React from 'react'
import Header from './header/Header'
import Menu from './menu/Menu'
import Content from './content/Content'

class Main extends React.Component {
  constructor(props) {
    super(props)
  }  

render() {
    return (
      <div className={this.props.className}>
        <Header className="header" userName={'Yun'} lastName={'Tran'}/>
        <Menu menu="menu"/>
        <Content className="content" />
      </div>
    )
  }
}

export default Main;
