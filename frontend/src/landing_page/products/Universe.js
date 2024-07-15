import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5'>
         <div className='row text-center'>
            <h1>The Xtrading Universe</h1>
            <p>Extend your trading and investment exprience even further with our
                partner platform
            </p>
            <div className='col-4 p-3 mt-5'>           
                <img src="media/universelogo/smallcase-logo.png" />
                <p className='text-small text-muted'>Thematic investment platform</p>          
            </div>
            <div className='col-4 p-3 mt-5'>           
                <img src="media/universelogo/ditto-logo.png" style={{width: '20%', height:"20%"}}/>
                <p className='text-small text-muted'>Insurance</p>          
            </div>
            <div className='col-4 p-3 mt-5'>           
            <img src="media/universelogo/sensibull-logo.svg" />
            <p className='text-small text-muted'>Options trading platform</p>       
            </div>

            <div className='col-4 p-3 mt-5'>           
                <img src="media/universelogo/streak-logo.png" style={{width: '30%', height:"30%"}}/>
                <p className='text-small text-muted'>Algo & strategy platform</p>          
            </div>
            <div className='col-4 mt-5'>           
                <img src="media/universelogo/tijori.svg" style={{width: '30%', height:"30%"}} />
                <p className='text-small text-muted'>Bonds trading platform</p>          
            </div>
            <div className='col-4 mt-5'>           
            <img src="media/universelogo/zerodhafundhouse.png" style={{width: '30%', height:"30%"}} />
            <p className='text-small text-muted'>Asset management</p>       
            </div>

        </div>
    </div>
     );
}

export default Universe;