import React from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket'; 

import OpenAccount from '../OpenAccount';


function Product() {
    return ( 
        <>
          <Hero />
          <CreateTicket />
          <OpenAccount />
         
        </>
     );
}

export default Product;