import './Container.css';
import React from 'react';

class Container extends React.Component {
    constructor(props) {
        console.log('constructor')
    }

    render () {
        return (
            <div>
               <Main/>
            </div>
        )
    }
}
export default Container;