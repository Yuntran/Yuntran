import * as React from "react";
import "./Menu.css";
import CheckinClock from "./img/checkinclock.svg";
import CheckoutClock from "./img/checkoutclock.svg";
import OvertimeClock from "./img/overtimeclock.svg";
import DayoffClock from "./img/dayoffclock.svg";
import Bluedot from "./img/bluedot.svg";
import Reddot from "./img/reddot.svg";
import Greendot from "./img/greendot.svg";
import Purpledot from "./img/purpledot.svg";
import Clock from "./clock/Clock";


export default class Menu extends React.Component{

    AlertAttendanceTime = (status) => {
    const attendanceRequest = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({status: status})
    };
     fetch('http://127.0.0.1:8000/attendances',attendanceRequest).then(res => res.json()).then(data => {
          console.log(data)

    this.props.setAttendance({attendance:data})

     });
   
    }
    render(){
        return(
            <div className="menu">
                <Clock className={"checkin clock"} clockName={"出勤"}
                       clockImage={CheckinClock} clockStatus={Bluedot}
                       attendanceTime={this.AlertAttendanceTime}
                    />
                <Clock className={"checkout clock"} clockName={"退勤"}
                       clockImage={CheckoutClock} clockStatus={Reddot}
                        attendanceTime={this.AlertAttendanceTime}
                        />
                <Clock className={"overtime clock"} clockName={"残業"}
                       clockImage={OvertimeClock} clockStatus={Greendot}/>
                <Clock className={"dayoff clock"} clockName={"休暇"}
                       clockImage={DayoffClock} clockStatus={Purpledot}/>

            </div>
        )
    }
}