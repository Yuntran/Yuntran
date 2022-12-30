import './Container.css';
import React from 'react';
import Main from './main/Main'
import Toolbar from './toolbar/Toolbar'
import Calendar from './calendar/Calendar'


class Container extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props)
    }  
    render () {
        return (
            
            <div className={this.props.className}>
            <Toolbar className={"toolbar"}/>
            <Main className={"main"}/>
            <Calendar className={"calendar"} />
            </div>
        )
    }
}
export default Container;