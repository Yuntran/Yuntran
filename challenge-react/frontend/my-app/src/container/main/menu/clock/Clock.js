import './Clock.css';
import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props); 
   }
    render() {
        return ( 
             <div className={this.props.clock}>
                <img src={this.props.clockImage} />
                <img src={this.props.clockStatus} />
                <p>{this.props.clockName}</p>
             </div>
            )
    }
}
export default Clock;
