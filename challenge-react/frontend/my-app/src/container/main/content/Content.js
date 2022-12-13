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
    return (
        <div>
            <Activity/>
            <Statistic/>
        </div>
        )
    }
}
export default Content;