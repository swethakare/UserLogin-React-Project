import React, { useState } from 'react';
import './Verified.css';
import verifiedimg from './images/verified image.gif';

function Verified(){

    return(
        
        <div className="verified-form-container">
            <h1>Password was changed successfully..!!</h1>
            <p>
            <img src={verifiedimg}  width={200}/>
            </p>
            
        </div>
    );
}

export default Verified;