import React from "react";
import "./customscss.scss";
import Text from "./Text";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
const hotelsData = [
  {
    name: "Belgrave Hotel Oval",
    price: 56000,
    stars: 3,
    rating: 6.9,
    review: "6.9 Good",
    reviewsCount: 434,
    description: "Beautiful residential area, near the embassy row.",
    reviewer: "Zaiton, Singapore",
  },
  {
    name: "B’Shan Apartments",
    price: 33000,
    stars: 2,
    rating: 3.4,
    review: "5.9 Review Score",
    reviewsCount: 3,
    description: "Stone’s throw away from Kensington Palace.",
    reviewer: "Zaiton, Singapore",
  },
  {
    name: "Park Avenue Hyde Park",
    price: 45000,
    stars: 1,
    rating: 2.9,
    review: "6.7 Good",
    reviewsCount: 2064,
    description:
      "I was a bit worried before I got here because of some low rating reviews.",
    reviewer: "Joonha, South Korea",
  },
];

const Reviews = () => {
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
    if (selectedRating === "price_lowest") {
      assignValue.sort((a, b) =>
        isAscendingRating ? a.price - b.price : b.price - a.price
      );
    }
    if (sortBy === "Rating") {
      assignValue.sort((a, b) =>
        isAscending ? a.rating - b.rating : b.rating - a.rating
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
        <Text type="h2" content="Real Reviews  for hotels" />

        <div className="custom-text">
          <div className="container mt-5 text-center ">
            <div className="d-flex justify-content-center align-items-center">
              <div className="row w-75">
                {filteredHotels.map((hotel, index) => (
                  <div className="col-md-4 " key={index}>
                    <div className="card h-100 border  hover-shadow">
                      <div className=" hover-shadow  card-body">
                        <h5 className="text-primary">{hotel.name}</h5>
                        <p className="mb-1">
                          {hotel.rating} <br />
                          <small className="text-muted">
                            Based on {hotel.reviewsCount} reviews
                          </small>
                        </p>
                        <div className="d-flex flex-wrap justify-content-center">
                          {[1, 2, 3, 4, 5].map((_, index) => (
                            <img
                              key={index}
                              src={
                                index < hotel.stars
                                  ? "/Images/star.png"
                                  : "/Images/gray.jpeg"
                              }
                              width="20"
                            />
                          ))}
                        </div>
                        <p className="mt-2">{hotel.description}</p>
                        <p className="text-muted">
                          <small>{hotel.reviewer}</small>
                        </p>
                        <p className="text-danger fw-bold fs-4">
                          {hotel.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {filteredHotels.length === 0 && (
          <p className="text-center">No hotels found.</p>
        )}
      </div>
    </>
  );
};

export default Reviews;
