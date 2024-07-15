import React from 'react';

function LeftSection({imageURL, productName,
     productDesription,tryDemo, 
    learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row '>
                <diV className='col-6 p-3'>
                    <img src={imageURL} />
                </diV>
                
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div className='mt-3'>
                    <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo</a>
                    <a href={learnMore} style={{marginLeft:"30px", textDecoration: "none"}}>learnMore</a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay}><img src="media/images/google.svg" /></a>
                    <a href={appStore}  style={{marginLeft: "30px"}}><img src="media/images/appstore.svg" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;