import { Link } from "react-router-dom";
import "./scss.scss";

const HotelCard = ({ hotel }) => {
  return (
    <div className="mb-4 p-3 shadow-sm mt-2 c">
      <div className="row g-0">
        <div className="col-md-4">
          <Link to={`/details/${hotel.id}`}>
            <img
              src={hotel.mainImage}
              className="img-fluid rounded"
              alt={hotel.name}
              style={{ width: "80%" }}
            />
          </Link>
          <div className="d-flex flex-wrap rounded" style={{ width: "80%" }}>
            {hotel.gallery.slice(0, 15).map((image, index) => (
              <Link to={`/details/${hotel.id}`} key={index}>
                <img
                  src={image}
                  className="m-class"
                  width="60"
                  height="50"
                  alt="Gallery"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="col-md-5 col-class">
          <div className="card-body">
            <Link
              to={`/details/${hotel.id}`}
              className="nav-class navbar-brand fs-5 card-title fw-bold"
            >
              {hotel.name}
            </Link>
            <p>
              <span className="text-primary">{hotel.location}</span>
            </p>
            <p className="fw-medium">{hotel.Country}</p>
            <p className="text-muted mt-3">{hotel.discription}</p>
            <p className="fw-bold">
              Available dates:
              <span className="ms-2 fw-normal">{hotel.availableDates}</span>
            </p>

            <div className="d-flex flex-wrap">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <img
                  key={index}
                  src={
                    index < hotel.stars
                      ? "/Images/star.png"
                      : "/Images/gray.jpeg"
                  }
                  width="20"
                  className="me-1"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-3 border-start d-flex flex-column justify-content-center align-items-end pe-3">
          <p className="text-muted">Very good</p>
          <span className="text-muted fs-5 mb-5">{hotel.rating} Reviews</span>
          <p className="text-danger fw-medium fs-4">PKR {hotel.price}</p>
          <Link className="btn btn-primary btn-lg" to={"/Booknow"}>
            Check availability
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
