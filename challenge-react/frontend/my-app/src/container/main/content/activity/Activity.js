import './Activity.css';
import React from 'react';

class Activity extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props)   
    }

render () {
    return (
        
        <div className={this.props.checkInfo}>
        {this.props.checkInfo.checkDate},
        {this.props.checkInfo.checkTime},
        {this.props.checkInfo.inOut}</div>
        
        )
    }   
}


 /*           <div class="content">
            <div class="activity">
                <div class="recent-activity">最近の活動</div>
                <div class="last-activity activity-row">
                    <div class="check-date">2022年10月20日 (木)</div>
                    <div class="check-time"> 18時44分30秒</div>
                    <div class="in-out out">退勤</div>
                </div>
                <div class="next1-activity activity-row">
                    <div class="check-date">2022年10月20日 (木)</div>
                    <div class="check-time"> 9時25分30秒</div>
                    <div class="in-out in">出勤</div>
                </div>
                <div class="next2-activity activity-row">
                    <div class="check-date">2022年10月19日 (水)</div>
                    <div class="check-time"> 19時00分22秒</div>
                    <div class="in-out out">退勤</div>
                </div>
                <div class="next3-activity activity-row">
                    <div class="check-date">2022年10月19日 (水)</div>
                    <div class="check-time">9時25分30秒</div>
                    <div class="in-out in">出勤</div>
                </div>
                <div class="netx4-activity activity-row">
                    <div class="check-date">2022年10月18日 (火)</div>
                    <div class="check-time">19時00分22秒</div>
                    <div class="in-out out">退勤</div>
                </div>
                <div class="next5-activity activity-row">
                    <div class="check-date">2022年10月18日 (火)</div>
                    <div class="check-time">9時25分30秒</div>
                    <div class="in-out in">出勤</div>
                </div>
                */
export default Activity;                
