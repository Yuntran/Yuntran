import * as React from "react";
export default class Header extends React.Component{
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
        <div className="header">
            <div className="header-title">{this.state.greetingMessage},
                {this.props.lastName} {this.props.userName}
            </div>
        </div>
    )
}
}


