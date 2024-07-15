import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import OpenAccount from "../OpenAccount";

function Product() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/products-coin.png"
        productName="Xite"
        productDesription="Our ultra-fast flagship 
        trading platform with streaming market data,
         advanced charts, an elegant UI, and more. 
         Enjoy the Xite experience seamlessly on your Android and iOS
          devices."
        tryDemo=''
        learnMore=""
        googlePlay=""
        appStore=""
      />
       <RightSection 
        productName="Console"
        productDesription="Our ultra-fast flagship 
        trading platform with streaming market data,
         advanced charts, an elegant UI, and more. 
         Enjoy the Xite experience seamlessly on your Android and iOS
          devices."
        
        learnMore=""
        imageURL="media/images/products-console.png"
        />
      <LeftSection
        imageURL="media/images/products-coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. 
        Enjoy the investment experience on your Android and iOS devices."
        tryDemo=''
        learnMore=""
        googlePlay=""
        appStore=""
      />

       <RightSection 
        productName="Xite API"
        productDesription="Our ultra-fast flagship 
        trading platform with streaming market data,
         advanced charts, an elegant UI, and more. 
         Enjoy the Xite experience seamlessly on your Android and iOS
          devices."
        
        learnMore=""
        imageURL="media/images/varsity-products.png"
        />

      <LeftSection
        imageURL="media/images/products-kiteconnect.png"
        productName="Varsity Mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is 
        broken down into bite-size cards to help you learn on the go."
        tryDemo=''
        learnMore=""
        googlePlay=""
        appStore=""
      />
       <p>
        Want to know more about our technology stack?
         Check Out the Xtrading.tech blog.
       </p>
      
      <Universe />
      <OpenAccount />
    </>
  );
}

export default Product;
