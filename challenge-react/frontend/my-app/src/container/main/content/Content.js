import './Content.css';
import React from 'react';
import Activity from './activity/Activity';
import Statistic from './statistic/Statistic';

class Content extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props)
    }
Content = ['Activity','Statistic'];

render () {
    const checkInfo1 = {checkDate:"2022年10月20日 (木)",checkTime:"18時44分30秒",inOut:"退勤"}
    const checkInfo2 = {checkDate:"2022年10月20日 (木)",checkTime:"9時25分30秒",inOut:"出勤"}
    const checkInfo3 = {checkDate:"2022年10月19日 (水)",checkTime:"19時00分22秒",inOut:"退勤"}
    const checkInfo4 = {checkDate:"2022年10月19日 (水)",checkTime:"9時25分30秒",inOut:"出勤"}
    const checkInfo5 = {checkDate:"2022年10月18日 (火)",checkTime:"19時00分22秒",inOut:"退勤"}
    const checkInfo6 = {checkDate:"2022年10月18日 (火)",checkTime:"9時25分30秒",inOut:"出勤"}

    const timeBox1 = {boxName:"workday timebox", timeLabel:"出勤日",count:"14日"}
    const timeBox2 = {boxName:"holiday timebox",timeLabel:"土日祝",count:"6日"}
    const timeBox3 = {boxName:"worktime timebox",timeLabel:"出勤時間",count:"102時30分",detail:"詳細"}
    const timeBox4 = {boxName:"overtime timebox",timeLabel:"残業時間",count:"10時"}
    const timeBox5 = {boxName:"resttime timebox",timeLabel:"休憩時間",count:"15時"}

    return (
        <div>
            <div className='recent-activity'>最近の活動</div>
            <Activity checkInfo = {checkInfo1}/>
            <Activity checkInfo = {checkInfo2}/>
            <Activity checkInfo = {checkInfo3}/>
            <Activity checkInfo = {checkInfo4}/>
            <Activity checkInfo = {checkInfo5}/>
            <Activity checkInfo = {checkInfo6}/>

            <div className='worktimestatistic'>出勤時間</div>
            <Statistic timeBox = {timeBox1} />
            <Statistic timeBox = {timeBox2} />
            <Statistic timeBox = {timeBox3} />
            <Statistic timeBox = {timeBox4} />
            <Statistic timeBox = {timeBox5} />

        </div>
        )
    }
}
export default Content;