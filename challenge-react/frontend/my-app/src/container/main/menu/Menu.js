import './Menu.css';
import React from 'react';
import { click } from '@testing-library/user-event/dist/click';
class Menu extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        }
    
Menu = ('checkin','checkout','overtime','dayoff');
render() {
        return (
            <div>
            </div>
        )
    }
}

export default Menu;


