import * as React from "react";

export default class ActivityContent extends React.Component{
    setClassNameBasedOn = (attendanceStatus) => {
        return attendanceStatus === "出勤" ? "in" : "out"
    }
weekDay = (day) => {
    const weekDays = ["月","火","水","木","金","土","日"]
    return weekDays[day]
}

addZeroPadding = (num)=>{
   let addZero;
    if (num <10) {
        addZero = "0"+num
    } else {
        addZero = num
    }
    return addZero
}


formatDate = (attendanceTime) => {

    const date = new Date(attendanceTime+"Z")
    
    const month = date.getMonth()+1
    return date.getFullYear() + "年"+ this.addZeroPadding(month) +"月"+this.addZeroPadding(date.getDate()) +"日"+"（"+ this.weekDay(date.getDay())+"）"
}
formatTime = (attendanceTime) => {
    const time = new Date(attendanceTime+"Z")
    return this.addZeroPadding(time.getHours()) +"時" +this.addZeroPadding(time.getMinutes()) + "分"+ this.addZeroPadding(time.getSeconds()) +"秒"
}
    render() {
        return(
            <div className="last-activity activity-row">
                <div className="check-date">{this.formatDate(this.props.dateTime)}</div>
                <div className="check-time">{this.formatTime(this.props.dateTime)}</div>
                <div className={"in-out " + this.setClassNameBasedOn(this.props.status)}>{this.props.status}</div>
            </div>
        )
    }
}