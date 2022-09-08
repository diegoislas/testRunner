import './App.css';
import React from 'react';
import Siham from './SihamProfile.jpg'


function SihamAbout() {
    return (
        <div className="siham-body-div">
            <img src={Siham} height={300} width={250} alt='This is Siham' />
            <div className="siham-info-div"><h2 className='siham-info'>My name Siham Argaw, and I am the Scrum Master of the team.</h2></div>
        </div>
    );
};

export default SihamAbout;