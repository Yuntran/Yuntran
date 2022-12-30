import './Menu.css';
import React from 'react';
import { click } from '@testing-library/user-event/dist/click';
import Clock from './clock/Clock';
import checkinclock from './img/checkinclock.svg'
import checkoutclock from './img/checkoutclock.svg'
import dayoffclock from './img/dayoffclock.svg'
import overtimeclock from './img/dayoffclock.svg'
import greendot from './img/greendot.svg'
import reddot from './img/reddot.svg'
import bluedot from './img/bluedot.svg'
import purpledot from './img/purpledot.svg'

class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

//data muon truyen vao clock
render() {
        return (
           <div className={this.props.menu}>
            <Clock clock={"checkinclock clock"} clockName="出勤" clockImage={checkinclock} clockStatus={bluedot}/>
            <Clock clock={"checkoutclock clock"} clockName="退勤" clockImage={checkoutclock} clockStatus={reddot}/>           
            <Clock clock={"overtimeclock clock"} clockName="残業" clockImage={overtimeclock} clockStatus={greendot}/>
            <Clock clock={"dayoffclock clock"} clockName="休暇" clockImage={dayoffclock} clockStatus={purpledot}/>

           </div> 
             )
        }
}

export default Menu;


