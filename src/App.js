import React from 'react';
import {connect} from 'react-redux';
import Controler from "./Controler";
import ArrWord from "./Word"


function App() {
    return (<div className="App">
        <Controler/>
        <ArrWord/>
        </div>);
    }

export default connect()(App);