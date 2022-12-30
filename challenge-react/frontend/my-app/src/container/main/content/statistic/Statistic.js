import './Statistic.css';
import React from 'react';

class Statistic extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props)
    }

    render () {
        return (
            <div className={this.props.timeBox}>
             
            </div>
        )
    }
}

export default Statistic;



                