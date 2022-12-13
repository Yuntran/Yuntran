import './Header.css';
import React from 'react';
//React la mot component framework
//component cha
//component con 
class Header extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            greetingMessage: ''
        }
    }
    //goi mot lan khi component duoc mounted
    componentDidMount() {
        console.log('component did mount')
        //moi n interval se goi callback function 1 lan
        // setInterval(this.checkTime, 1000)
        // setTimeout(this.checkTime, 1000)
    }
    //moi khi component duoc update, se goi function nay
    componentDidUpdate() {
        console.log('component did update')
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

    //requirement: dua theo current time de hien thi loi chao bang tieng nhat
    checkTime = () => {
        let message = ''
        const currentDateTime = new Date()
        //0 ~ 23 integer
        const currentHour = currentDateTime.getHours()
        //ohayo: 0h00~11h59 -> 0 <= hour < 12
        if(0 <= currentHour && currentHour < 12) {
            message = 'おはようございます'
        } else if (12 <= currentHour && currentHour < 18) { //konnichiha: 12h00 ~ 17h59 -> 12 <= hour < 18 
            message = 'こんにちは'
        } else { //kombanwa: 18h00 ~ 23h59
            message = 'こんばんは'
        }
        // console.log(message)
        //component chi duoc update khi this.setState duoc goi
        this.setState({greetingMessage: message})
        
    }
    //component update co nghia la ham render duoc goi lai
  render() {
    return (
      <div className='header header1 header2'>
        <button onClick={() => {this.checkTime()}} />
        {this.state.greetingMessage},{this.props.lastName} {this.props.userName}
        </div>
    )
  }
}

export default Header;
