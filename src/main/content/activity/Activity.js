import * as React from "react";
import "./Activity.css";
import ActivityContent from "./activitycontent/ActivityContent";



export default class Activity extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            attendance: null, //trường hợp giá trị đầu tiên là chưa update
            attendanceList:[],
        };
    }
//logic là thêm thông tin mới vào dòng đầu tiên và chỉ lấy đến dòng thông tin thứ 6
// khi nào thêm ? khi ấn vào shukkin, nghĩa là data được truyền từ menu vào activitty
//khi nào chuyển vào thì cần xét giá trị đầu tiên ???? ủa tại sao 
    static getDerivedStateFromProps (newProps, state) {
        if (newProps.attendance === null || newProps.attendance === state.attendance) {
            return null
        }
        return {           //sau khi thêm thông tin thì update 1 array mới có dạng này với thông tin đã update
            ...state,
            attendanceList: [newProps.attendance, ...state.attendanceList].slice(0, 6), //lấy 6 dòng
            attendance: newProps.attendance
        }
    }

    componentDidMount = () => {
        const attendanceRequest = {
            method: 'GET'
        };
         fetch('http://127.0.0.1:8000/getattendancelist',attendanceRequest)
         .then(res => res.json()).then(data => {
            this.setState({ attendanceList: data})
            // console.log(data)
            //  return <ul>{listItems}</ul>
         });    
        }
    render() {
        return(
        
            <div className="activity">
                <div className="recent-activity">最近の活動</div>
                {this.state.attendanceList.map((attendance, index) => //thêm key index, unique để lúc chạy nhận diện được attendance nào
            <ActivityContent key={index} dateTime = {attendance.time}
                status ={attendance.status}/>              
            )
}
            </div>
        )
        }
    }

