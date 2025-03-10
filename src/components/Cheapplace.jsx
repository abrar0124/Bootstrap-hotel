import { useSelector } from "react-redux";
import Text from "./Text";
import React from "react";
import { useState, useEffect } from "react";
const hotelsData = [
  {
    name: "Special Hotel Oval",
    Country: "Japan",
    price: 19000,
    availableDates: "2025-03-04",
    stars: 3,
    image: "/Images/cheap1.webp",
    rating: 8.2,
    review: "6.9 Good",
    reviewsCount: 434,
    description: "Beautiful residential area, near the embassy row.",
    reviewer: "Zaiton, Singapore",
  },
  {
    name: "Shan Apartments",
    Country: "Austria",
    availableDates: "2025-03-05",

    stars: 2,
    price: 21000,
    image: "/Images/cheap2.webp",
    rating: 3.2,
    review: "5.9 Review Score",
    reviewsCount: 3,
    description: "Stone’s throw away from Kensington Palace.",
    reviewer: "Zaiton, Singapore",
  },
  {
    name: "Cheap Avenue Hyde Park",
    availableDates: "2025-03-06",
    Country: "America",
    price: 17000,
    stars: 1,
    image: "/Images/cheap3.webp",
    rating: 1.3,
    review: "6.7 Good",
    reviewsCount: 2064,
    description:
      "I was a bit worried before I got here because of some low rating reviews.",
    reviewer: "Joonha, South Korea",
  },
];
function Cheapplace() {
  const {
    minprice,
    maxprice,
    searchQuery,
    selectedStars,
    selectedPrice,
    selectedDate,
    selectedCountry,
    isAscending,
    sortBy,
    selectedRating,
    isAscendingRating,
  } = useSelector((state) => state.hotels);
  const [filteredHotels, setFilteredHotels] = useState([]);

  const filterHotels = () => {
    let assignValue = hotelsData.filter(
      (hotel) =>
        (searchQuery === "" ||
          hotel.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedStars.length === 0 || selectedStars.includes(hotel.stars)) &&
        hotel.price >= selectedPrice &&
        (minprice === null || hotel.price >= minprice) &&
        (maxprice === null || hotel.price <= maxprice) &&
        (selectedDate == null || hotel.availableDates === selectedDate) &&
        (selectedCountry === null || hotel.Country === selectedCountry)
    );
    if (sortBy === "price_lowest") {
      assignValue.sort((a, b) =>
        isAscending ? a.price - b.price : b.price - a.price
      );
    }
    if (selectedRating === "Rating") {
      assignValue.sort((a, b) =>
        isAscendingRating ? a.rating - b.rating : b.rating - a.rating
      );
    }
    setFilteredHotels(assignValue);
    console.log("Filtered Hotels:", assignValue);
    console.log(selectedCountry);
  };
  // all filters will be re-render but selectedcountry will be just
  // render means first mount.
  useEffect(() => {
    filterHotels();
  }, [
    minprice,
    maxprice,
    searchQuery,
    selectedStars,
    selectedPrice,
    selectedDate,
    isAscending,
    sortBy,
    selectedRating,
    isAscendingRating,
  ]);

  return (
    <>
      <div className="container border-top">
        <Text type={"h2"} content={"Cheap places to stay in London"} />
        {/* Hotel List */}
        <div className=" d-flex justify-content-center">
          <div className="row w-75">
            {" "}
            {/* Restrict width for better centering */}
            {filteredHotels.map((hotel, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 hover-shadow">
                  <img
                    src={hotel.image}
                    className="card-img-top"
                    alt={hotel.name}
                  />
                  <div className="card-body">
                    <h5 className="text-primary">{hotel.name}</h5>
                    <p className="mb-1">
                      {hotel.rating} <br />
                      <small className="text-muted">
                        Based on {hotel.reviewsCount} reviews
                      </small>
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
                    <p className="fw-medium">{hotel.Country}</p>
                    <p className="mt-2">{hotel.description}</p>
                    <p className="text-muted">
                      <small>{hotel.reviewer}</small>
                    </p>
                    <p className="fw-bold ">
                      Available dates:
                      <span className=" ms-2 fw-normal">
                        {hotel.availableDates}
                      </span>
                    </p>
                    <p className="text-danger fw-bold fs-4">{hotel.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {filteredHotels.length === 0 && (
          <p className="text-center">No hotels found.</p>
        )}
      </div>
    </>
  );
}

export default Cheapplace;
