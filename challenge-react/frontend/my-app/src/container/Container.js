import './Container.css';
import React from 'react';
import Main from './main/Main'


class Container extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props)
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