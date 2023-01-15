import * as React from "react";
import Activity from "./activity/Activity";
import Statistic from "./statistic/Statistic";
export default class Content extends React.Component{
    render() {
        return(
            <div className="content">
                <Activity attendance = {this.props.attendance}/>
                <Statistic/>
            </div>
        )
    }
}