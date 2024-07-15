import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='\media\images\vintage-trophy-display-stockcake.jpg'  
                    style={{width:'80%', height:'25rem', objectFit:'cover'}}/>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Best Stock Investment platform in the United States</h1>
                    <p2 className='mb-5'>1.5+ million Xtraders client over the country</p2>

                    <div className='row mt-3'>
                        <div className='col-6'>
                            <ul>
                            <li>
                            <p>Futures and Options</p>
                        </li>
                        <li>
                            <p>Commodity and Derivatives</p>
                        </li>
                        <li>
                            <p> Currency Derivatives</p>
                        </li>
                        <li>
                            <p> 100% trustable</p>
                        </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                 <p> Stock & IPOs</p>
                                </li>
                                <li>
                                 <p> Direct mutual funds</p>
                                </li>
                                <li>
                                 <p> Bonds and Govt. Securities</p>
                                </li>
                                <li>
                                    <p>Safe and secure Investment</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default Awards;