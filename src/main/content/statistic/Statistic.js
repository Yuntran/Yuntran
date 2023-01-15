import * as React from "react";
import "./Statistic.css";

export default class Statistic extends React.Component{
    render() {
        return(
            <div className="statistic">
                <div className="worktimestatistic">出勤時間</div>
                <div className="workday timebox">
                    <div className="timelabel">出勤日</div>
                    <div className="count">14日</div>
                </div>
                <div className="holiday timebox">
                    <div className="timelabel">土日祝</div>
                    <div className="count">6日</div>
                </div>
                <div className="worktime timebox">
                    <div className="timelabel">出勤時間<span className="detail">詳細</span></div>
                    <div className="count">102時30分</div>
                </div>
                <div className="overtime-analysis timebox">
                    <div className="timelabel">残業時間</div>
                    <div className="count">10時</div>
                </div>
                <div className="resttime timebox">
                    <div className="timelabel">休憩時間</div>
                    <div className="count">15時</div>
                </div>

            </div>
        )
    }
}