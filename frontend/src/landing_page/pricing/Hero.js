import React from 'react';

function Hero() {
    return ( 
     <div className="container">
        <div className="row p-5 mt-5 text-center border-buttom  ">
            <h1>Pricing</h1>
            <h3 className='text-muted mt-3 fs-5'>Free equity investments and 
                flat $20 intraday and F&O trades</h3>
        </div>
        <div className="row p-5 mt-5 ">
          <div className='col-4 p-5'>
            <img src="media/images/zero.jpg" style={{width:"90%", height: "20rem"}} />
            <h1 className='mt-5'>
            Free equity delivery
            </h1>
            <p className='mt-3 text-muted'>All equity delivery investments (NASDAS, NYSE), are absolutely free — $0 brokerage.</p>
          </div>

          <div className='col-4 p-5 'style={{marginTop : "100px"}}>
          <img src="media/images/20.jpg" style={{width:"90%", height: "9.8rem"}}/>
            <h1 style={{marginTop : "109px"}}>
            Intraday and F&O trades
            </h1>
            <p  className='mt-3 text-muted'>Flat  $20 or 0.03% (whichever is lower) per executed order on intraday trades across 
                equity, currency, and commodity trades. Flat $20 on all option trades.</p>
          </div>

          <div className='col-4 p-5'>
          <img  src="media/images/zero.jpg" style={{width:"90%", height: "20rem"}}/>
            <h1 className='mt-5'>
            Free direct MF
            </h1>
            <p  className='mt-3 text-muted'>All direct mutual fund 
                investments are absolutely free —  $0 commissions & DP charges.</p>
          </div>

        </div>
     
    </div>
     );
}

export default Hero;