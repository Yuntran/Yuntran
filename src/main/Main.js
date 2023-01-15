import * as React from "react";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import Content from "./content/Content";



class Main extends React.Component{
    constructor(props){
    super(props)
    this.setState = this.setState.bind(this); 
    this.state = {
        attendance :null
    }
}
    render(){
        return(
            <div className="main">
                <Header userName={"Queen"} lastName={"Tiger"} />
                <Menu setAttendance = {this.setState} />
                <Content attendance ={this.state.attendance} />
            </div>

        )
    }
}
export default Main;