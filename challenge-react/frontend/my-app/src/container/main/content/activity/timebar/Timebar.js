import './Timebar.css';
import React from 'react';

class Timebar extends React.Component {
    constructor(props) {
        console.log('constructor')
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

<div class="statistic">
    <div class="worktimestatistic">出勤時間</div>
    <div class="workday timebox">
        <div class="timelabel">出勤日</div>
        <div class="count">14日</div>
    </div>
    <div class="holiday timebox">
        <div class="timelabel">土日祝</div>
        <div class="count">6日</div>
    </div>
    <div class="worktime timebox">
        <div class="timelabel">出勤時間<span class="detail">詳細</span></div>
        <div class="count">102時30分</div>
    </div>
    <div class="overtime-analysis timebox">
        <div class="timelabel">残業時間</div>
        <div class="count">10時</div>
    </div>
    <div class="resttime timebox">
        <div class="timelabel">休憩時間</div>
        <div class="count">15時</div>
    </div>
