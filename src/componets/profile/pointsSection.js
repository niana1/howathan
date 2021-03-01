import React from 'react';
import '../profile/index.css';

const PointsSection = ({data}) => {
    return (
        <div className="trophy-container">
           <h5 className="cell-wrapper">You are Rewarded Points: {data.points} <img 
     width="40"
     height="40"
     src="/images/trophy.png"
   ></img></h5> 
           <h5 className="cell-wrapper">Type: {data.type}</h5> 
           <h5 className="cell-wrapper" style={{float:"right",color:"GrayText"}}>From: {data.from}</h5> 
        </div>
    )
}

export default PointsSection
