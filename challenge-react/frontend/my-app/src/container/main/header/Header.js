import './Header.css';
import React from 'react';

class Header extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            greetingMessage: ''
        }
    }

    componentDidMount() {
        setInterval(this.checkTime(), 1000)
    }

    checkTime = () => {
        let message = ''
        const currentDateTime = new Date()
        const currentHour = currentDateTime.getHours()
        if(0 <= currentHour && currentHour < 12) {
            message = 'おはようございます'
        } else if (12 <= currentHour && currentHour < 18) {  
            message = 'こんにちは'
        } else { 
            message = 'こんばんは'
        }

        this.setState({greetingMessage: message})    
    }
    

  render() {
    return (
      <div className='header'>
        {this.state.greetingMessage},{this.props.lastName} {this.props.userName}
        </div>
    )
  }
}

export default Header;
