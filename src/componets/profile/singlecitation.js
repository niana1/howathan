import React from 'react';
import '../profile/index.css';

const SingleCitation = ({data}) => {
    return (
        <div className="recognition-container">
            <h5 className="cell-wrapper" style={{color:"GrayText"}} >To: {data.to}</h5> 
           <h5 className="cell-wrapper">Type: {data.type}</h5> 
           <h5 className="cell-wrapper" style={{wordWrap:"break-word"}}>{data.citation}</h5> 
           <h5 className="cell-wrapper" style={{float:"right" ,color:"GrayText"}}>From: {data.from}</h5> 
        </div>
    )
}

export default SingleCitation
