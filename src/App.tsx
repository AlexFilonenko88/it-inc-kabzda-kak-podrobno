import React from 'react';
import logo from './logo.svg';
import './App.css';
import {OnOff} from "./OnOff/OnOff";
import {UncontrolledAccordion} from "./UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./UncontrolledRating/UncontrolledRating";
import {Rating} from "./Rating/Rating";

function App() {
    return (
        <div className="App">

            <OnOff
                // on={}
                //                 // onChange={() => {}}
            />

            <UncontrolledAccordion titleValue={'Menu'}/>

            <UncontrolledRating/>

            <Rating/>

        </div>
    );
}

export default App;
