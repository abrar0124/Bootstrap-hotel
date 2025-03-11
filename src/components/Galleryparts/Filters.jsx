import { useDispatch, useSelector } from "react-redux";
import {
  setPriceFilter,
  toggleStarFilter,
  clearstarfilter,
} from "../../Redux/Hotelslice";
import MinMaxselection from "./MinMaxselection";

const Filters = () => {
  const dispatch = useDispatch();
  const { selectedStars, selectedPrice } = useSelector((state) => state.hotels);

  return (
    <>
      <MinMaxselection />
      {selectedStars.length > 0 && (
        <div
          className="card p-3 my-3"
          style={{ width: "80%", marginLeft: "20%" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h5>Your Filters</h5>
            <button
              className="btn fw-medium fs-5 mb-2 text-primary"
              onClick={() => dispatch(clearstarfilter())}
            >
              CLEAR
            </button>
          </div>
          <div className="mt-2">
            {selectedStars.map((star) => (
              <div className="form-check lh-lg" key={star}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={selectedStars.includes(star)}
                  onChange={() => dispatch(toggleStarFilter(star))}
                />
                <label className="form-check-label">{star} stars</label>
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        className="card p-3"
        style={{ width: "80%", marginLeft: "20%", marginTop: "3%" }}
      >
        <h6>Popular Hotels in London</h6>
        {[5, 4, 3, 2, 1].map((star) => (
          <div className="form-check lh-lg" key={star}>
            <input
              className="form-check-input"
              type="checkbox"
              checked={selectedStars.includes(star)}
              onChange={() => dispatch(toggleStarFilter(star))}
            />
            <label className="form-check-label">{star} stars</label>
          </div>
        ))}

        <div className="mt-3">
          <h5>Price PKR</h5>
          <input
            type="number"
            className="form-control"
            placeholder="Enter price..."
            value={selectedPrice || ""}
            onChange={(e) =>
              dispatch(setPriceFilter(Number(e.target.value)) || null)
            }
            onWheel={(e) => e.target.blur()}
          />
        </div>
      </div>
    </>
  );
};

export default Filters;
