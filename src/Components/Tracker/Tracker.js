import React, { Component } from "react";
import axios from 'axios';

class Tracker extends Component {
    constructor(props){
        super(props);

        this.state = {
            week: 0
        }
    }

    render(){
        return(
            <div className="Tracker-Container">
                <p>Tracker</p>
            </div>
        )
    }
}

export default Tracker;