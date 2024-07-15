import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5  border-top">
        <h1 className=" text-center  ">People</h1>
      </div>

      <div
        className="row p-5 mt-5 text-muted fs-6 "
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/roman.jpg"
            style={{ borderRadius: "100%", width: "80%" }}
          />
          <h4 className="mt-5">Roman Balayar</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-6 p-3">
          <p>
            Roman bootstrapped and founded xtrading in 2024 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Xtrading has changed the landscape of the U.S stock broking industry.
          </p>
          <p>
            He is a member of the NASDAS Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC). <br></br>Playing
            Football is his zen.
          </p>
          <p>Connect on < a href=""style={{textDecoration: "none"}} >Homepage</a> / 
          < a href="" style={{textDecoration: "none"}}>TradingQnA</a> /
           < a href="" style={{textDecoration: "none"}}>Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
