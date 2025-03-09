import React from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Hotels from "./Hotels";

const Details = () => {
  const { id } = useParams();
  const hotel = Hotels.find((h) => h.id == id);
  console.log("show id", id);
  if (!hotel) {
    return <h2 className="text-center mt-5">Hotel not found!</h2>;
  }
  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: "8%" }}>
        {/* Breadcrumb Navigation */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="text-dark">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/" className="text-dark">
                United kingdom hotels
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/" className="text-dark">
                London hotels
              </Link>
            </li>
            <li className="breadcrumb-item active fw-medium">
              {hotel.Country}
            </li>
          </ol>
        </nav>

        {/* Hotel Title & Location */}
        {/* Image Gallery Section */}
        <div className="row">
          {/* Main Image */}
          <div className="col-md-6">
            <img
              src={hotel.mainImage}
              className="img-fluid rounded "
              style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
            />
          </div>
          {/* Thumbnail Gallery */}
          <div className="col-md-6">
            <div className="d-flex flex-wrap gap-2">
              {hotel.gallery.slice(0, 6).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="img-fluid rounded"
                  style={{ width: "32%", height: "190px", objectFit: "cover" }}
                  alt="Gallery"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="d-flex flex-wrap">
          <div className=" mt-4 p-3">
            <div className=" row">
              <div
                className="border p-3"
                style={{ width: "96%", marginLeft: "2%" }}
              >
                <h2 className="fw-medium">{hotel.Country} ⭐⭐⭐</h2>
                <p>{hotel.discription}</p>
              </div>
              <div
                className="d-flex p-2 gap-4 mt-4 border flex-wrap"
                style={{ width: "96%", marginLeft: "2%" }}
              >
                <h4 className=" col-md-3 fw-medium ">Highlights</h4>
                <div>
                  <img src="/Images/bus.svg" alt="" />
                  <p>
                    960 meters to public
                    <br /> transportation
                  </p>
                </div>
                <div>
                  <img src="/Images/door.svg" alt="" />

                  <p>Check-in [24-hour]</p>
                </div>
                <div>
                  <img src="/Images/Hygen.svg" alt="" />

                  <p>Hygiene Plus</p>
                </div>
              </div>
            </div>
            <div className="border mt-4 p-2">
              <h4 className=" col-md-3 ms-4 fw-medium ">Facilities</h4>

              <div
                className="d-flex gap-5 p-2 mt-4  flex-wrap"
                style={{ width: "96%", marginLeft: "2%" }}
              >
                <p>✔Free Wi-Fi</p>
                <p className="text-primary">✔ Front Desk (24 Hours)</p>
                <p className="text-primary">✔ Restaurant</p>
                <p className="text-primary">✔ Bar</p>
                <p className="text-primary">✔ Garden Area</p>
                <p>✔ Luggage storage</p>
                <p>✔ Balcony/Terrace</p>
                <p>✔ Garden</p>
                <p>✔ Laundary</p>
              </div>
            </div>
            {/* Review Score & Nearby Places */}
          </div>

          {/* Facilities Section */}

          {/* Right Side: Ratings & Map */}
          <div className="col-md-4 mt-5 ms-3 w-100">
            <div className="border p-3 rounded shadow-sm">
              <h5 className="fw-bold">{hotel.rating} Very Good</h5>
              <p className="text-muted">{hotel.reviews} reviews</p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-success">
                  Service {hotel.service}
                </span>
                <span className="badge bg-primary">
                  Location {hotel.locationRating}
                </span>
                <span className="badge bg-warning">
                  Cleanliness {hotel.cleanliness}
                </span>
                <span className="badge bg-info">
                  Facilities {hotel.facilities}
                </span>
              </div>
              {/* Map */}
              <div className="mt-4  rounded ">
                <img
                  src="/Images/map.jpeg"
                  alt="Map"
                  className="img-fluid rounded"
                />
                <p className="text-center mt-2">
                  <p className="text-start fw-medium">
                    Location Rating: <span className="fw-normal">v good</span>
                  </p>
                </p>
              </div>
              <div className="mt-4 w-75 p-3  border-top  rounded ">
                <h4 className="fw-bold">7.4 Very Good</h4>
                <p className="text-muted">Based on 1,867 reviews</p>
                <h5 className="fw-bold">Nearby Places</h5>
                <ul className="list-unstyled">
                  <li>🏛 Natural History Museum - 2.6 km</li>
                  <li>📍 City Center - 790 meters</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Link to="/" className="btn btn-secondary mt-3">
          🔙 Back to Gallery
        </Link>
      </div>
    </>
  );
};

export default Details;
