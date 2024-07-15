import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media\images\landing.png' 
                alt='Hero Image' className='mb-3' style={{width:"100%", height:"32rem", objectFit:'cover'}} />
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Invest Easily & Safely</p>
                <button className='p-2 btn btn-primary fs-5' style={{width:"21%", margin:"0 auto"}}>Signup Now</button>
                
            </div>
        </div>
     );
}

export default Hero;