import * as React from "react";
import "./Clock.css";
export default class Clock extends React.Component{
    constructor(props) {
        super(props);
    }
    


    render() {
        return(
            <div className={this.props.className}
            onClick={()=>this.props.attendanceTime(this.props.clockName)}
            >

                <p className="clockname">{this.props.clockName}</p>
                <img className="clockimage" src={this.props.clockImage} alt="checkin clock"/>
                <img className="colorcircle" src={this.props.clockStatus} alt="blue dot"/>
            </div>
        )
    }
}