import React from "react";

function Middle() {
  return (
    <div className="middle">
      <div className="container">
        <div className="row">
          <marquee
            behavior="slide"
            direction="up"
            className="col-xs-6 col-sm-6 col-md-6 headline"
          >
            Lorem Ipsum{" "}
          </marquee>

          <marquee
            behavior="slide"
            direction="up"
            className="col-xs-6 col-sm-6 col-md-6 subhead"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default Middle;
