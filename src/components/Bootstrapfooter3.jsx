import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./customscss.scss";
import Text from "./Text";

const Bootstrapfooter3 = () => {
  return (
    <div className=" custom-footer footer  text-white  text-center py-4">
      <div className="container">
        <Text
          type={"h6"}
          content={
            <>
              All material herein © 2005-2025 Agoda Company Pte. Ltd. All Rights
              Reserved. <br />
              Agoda is part of Booking Holdings Inc, the world leader in online
              travel & related services.
            </>
          }
        />
        <div className="row justify-content-center">
          <div className="col-6 col-md-2">
            <img
              src="/Images/agoda.jpeg"
              alt="Agoda"
              className="img-fluid"
              style={{ height: "60px" }}
            />
          </div>
          <div className="col-6 col-md-2">
            <Text type={"h6"} content={"Priceline.com"} />
          </div>
          <div className="col-6 col-md-2">
            <img
              src="/Images/kayak.png"
              className="img-fluid "
              style={{ height: "20px" }}
            />
          </div>
          <div className="col-6 col-md-2">
            <Text type={"h6"} content={"Booking.com"} />
          </div>
          <div className="col-6 col-md-2">
            <Text type={"h6"} content={"Opentable"} />
          </div>
        </div>
        <Text type={"h6"} content={"sg-pc-6g-geo-web-user-5956d79776-kvrpk"} />
      </div>
    </div>
  );
};

export default Bootstrapfooter3;
