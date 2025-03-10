import React from "react";
import "./customscss.scss";
import Text from "./Text";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
const hotelsData = [
  {
    name: "Belgrave Hotel Oval",
    Country: "Canada",
    price: 64000,
    stars: 3,
    availableDates: "2025-03-18",
    image: "/Images/break1.webp",
    rating: 7.7,
    review: "6.9 Good",
    reviewsCount: 434,
    description: "Beautiful residential area, near the embassy row.",
    reviewer: "Zaiton, Singapore",
  },
  {
    price: 33000,
    name: "B’Shan Apartments",
    Country: "Austria",
    stars: 4,
    availableDates: "2025-03-19",
    image: "/Images/break2.jpg",
    rating: 8.7,
    review: "5.9 Review Score",
    reviewsCount: 3,
    description: "Stone’s throw away from Kensington Palace.",
    reviewer: "Zaiton, Singapore",
  },
  {
    name: "Park Avenue Hyde Park",
    Country: "Germany",
    price: 34000,
    availableDates: "2025-03-20",
    stars: 5,
    image: "/Images/break3.webp",
    rating: 10.0,
    review: "6.7 Good",
    reviewsCount: 2064,
    description:
      "I was a bit worried before I got here because of some low rating reviews.",
    reviewer: "Joonha, South Korea",
  },
];

const Londonbreakfast = () => {
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
        <Text type={"h2"} content={"Kuala Lumpur hotels with breakfast"} />
        {/* Hotel List */}
        <div className=" d-flex justify-content-center">
          <div className="row w-75">
            {/* Restrict width for better centering */}
            {filteredHotels.map((hotel, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 hover-shadow">
                  <img
                    src={hotel.image}
                    className="card-img-top"
                    alt={hotel.name}
                    style={{ height: "200px" }}
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
                      <small>{hotel.reviewer}Reviews</small>
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
};

export default Londonbreakfast;
