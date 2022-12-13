import './Clock.css';
import React from 'react';

class Clock extends React.Component {
    constructor() {
        console.log('constructor');
    
const ClockName = ('出勤','退勤','残業','休暇');  
const ClockImage = [checkinImg,checkoutImg,overtimeImg,dayoffImg];
const Colorcircle =[bluecircle, greencircle, redcircle,purplecircle];
Clock() => {
    Clock.clockName =''
    Clock.clockImage =''
    Clock.Colorcircle ='';
}
 render () {
    return (
        <div className = Clock>
          <div className Clock ="checkin">;
          <p className="clockname">出勤</p>;
          <img className="clockimage" src="img/checkinclock.svg" alt="checkin clock">;
          <img className="colorcircle" src="img/reddot.svg" alt="red dot">;
          </div>;

         </div>
    )
 }
}
// function Clock(props) {
//     return (
//         <button className="clock" onclick={props.onClick}>
//         </button>
//         )
//     }


        
        // <div className="checkout clock" >
        // <p className="clockname">退勤</p>
        // <img className="clockimage" src="img/checkoutclock.svg" alt="checkout clock">
        // <img className="colorcircle" src="img/reddot.svg" alt="red dot">
        // </div>

        // <div className="overtime clock">
        // <p className="clockname">残業</p>
        // <img className="clockimage" src="img/overtimeclock.svg" alt="overtime clock">
        // <img className="colorcircle" src="img/greendot.svg" alt="green dot">
        // </div>

        // <div className="dayoff clock">
        // <p className="clockname">休暇</p>
        // <img className="clockimage" src="img/dayoffclock.svg" alt="dayoff clock">
        // <img className="colorcircle" src="img/purpledot.svg" alt="purple dot">
        // </div>

   





    
    
