import React from 'react';

function RightSection({
    imageURL, productName,
     productDesription, 
    learnMore
}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
            <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div className='mt-3'>
                    <a href={learnMore} style={{marginLeft:"30px", 
                        textDecoration: "none"}}>learnMore</a>
                    </div>       
            </div>
            <div className='col-6 '>
                
                    <img src={imageURL} />
                
            </div>
            </div>
        </div>
     );
}

export default RightSection;