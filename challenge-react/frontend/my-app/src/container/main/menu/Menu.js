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
           <div className="clock">
            <Clock className={"checkinclock"} clockName="出勤" clockImage={checkinclock} clockStatus={bluedot}/>
            <Clock className={"checkoutclock"} clockName="退勤" clockImage={checkoutclock} clockStatus={reddot}/>            <Clock clockName="出勤" clockImage={checkinclock} clockStatus={bluedot}/>
            <Clock className={"overtimeclock"} clockName="残業" clockImage={overtimeclock} clockStatus={greendot}/>
            <Clock className={"dayoffclock"} clockName="休暇" clockImage={dayoffclock} clockStatus={purpledot}/>

           </div> 
             )
        }
}

export default Menu;


