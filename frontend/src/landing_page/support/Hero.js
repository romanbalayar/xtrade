import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 mt-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{ color: "white" }}>
          Track Tickets
        </a>
      </div>

      <div className="row p-5 ">
        <div className="col-6 p-5 mb-5 ">
          <h4>
            Search for an answer or browse help topics to create a ticket{" "}
          </h4>
        <input placeholder="Eg. how do I activate F&O" style={{width: "80%", height: "3rem"}} />
          <br/><br />
          <a href='' style={{ color: "white" }}>Track account opening </a><br></br><br />
          <a href='' style={{ color: "white" }}>Track segment activation </a><br/><br />
          <a href='' style={{ color: "white" }}>Intraday margins </a><br/><br />
          <a href='' style={{ color: "white" }}>Xite user manual</a><br/><br />
        </div>
        <div className="col-6 p-5 mb-5">
          <h4>Featured</h4><br />
          <a href='' style={{ color: "white" }}>1. Latest Intraday leverages and Square-off timings</a><br></br>
          <a href='' style={{ color: "white" }}> 2. Surveillance measure on scrips - June 2024</a><br/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
