import React from 'react';

function Pricing() {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
               <div className='col-4'>
                   <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                   <p>We pioneered the concept of discount broking and price transparency in India. 
                     Flat fees and no hidden charges.
                    </p>
                    <a href=''  style={{textDecoration:"none"}}>See Pricing <i class="fa fa-long-arrow-right"
                         aria-hidden="true"></i></a>
               </div>
               <div className='col-2'></div>
               <div className='col-6'>
                    <div className='row text-center'>
                        <diV className='col p-3 border'>
                            <h1 className='mb-3 fs-2'>$0</h1>
                            <p>Free equality delivery and <br/>direct mutual funds</p>
                        </diV>
                        <diV className='col p-3 border'>
                            <h1 className='mb-3 fs-2'>$20</h1>
                            <p>Intraday and F&O</p>
                        </diV>
                    </div>
               </div>
            </div>
        </div>
     );
}

export default Pricing;