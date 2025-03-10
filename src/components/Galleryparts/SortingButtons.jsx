import { useDispatch, useSelector } from "react-redux";
import {
  setActiveButton,
  setSortBy,
  toggleSortOrder,
  setActiveDropdown,
  setSelectedRating,
  toggleRatingorder,
} from "../../Redux/Hotelslice";
import "./scss.scss";

const SortingButtons = () => {
  const dispatch = useDispatch();
  const { isAscending, activeButton, activeDropdown, isAscendingRating } =
    useSelector((state) => state.hotels);

  return (
    <div className="btn-group mb-2 " style={{ width: "960px" }}>
      <button
        className={`p-2 btn btn-lg border rounded fs ${
          activeButton === "ourTopPicks" ? "btn-primary text-white " : ""
        }`}
        onClick={() => dispatch(setActiveButton("ourTopPicks"))}
      >
        Our top picks
      </button>

      {/* Top Reviewed Dropdown */}
      <div
        className="dropdown-container"
        onBlur={() => dispatch(setActiveDropdown(null))}
      >
        <button
          className={`custom-btn p-3 btn border btn-lg fs ${
            activeButton === "topReviewed" ? "btn-primary text-white" : ""
          }`}
          onClick={() => {
            dispatch(setActiveDropdown("topReviewed"));
            dispatch(setActiveButton("topReviewed"));
          }}
        >
          Top Reviewed
        </button>
        {activeDropdown === "topReviewed" && (
          <div
            className="position-absolute mt-2 bg-white border rounded"
            style={{ zIndex: 1050, cursor: "pointer", width: "250px" }}
          >
            <div
              className="fw-bold p-2 ms-1"
              style={{ backgroundColor: "rgb(237, 244, 247)" }}
            >
              Best Rated by
            </div>
            <div className="fw-medium p-2 border">All guests</div>
            <div className="fw-medium p-2 border">Business Travelers</div>
            <div className="fw-medium p-2 border">Couples</div>
            <div className="fw-medium p-2 border">Solo Travelers</div>
            <div className="fw-medium p-2 border">
              Families with young children
            </div>
            <div className="fw-medium p-2 border">
              Families with older children
            </div>
            <div className="fw-medium p-2 border">Groups</div>
          </div>
        )}
      </div>

      <button
        className={`custom-btn p-3 btn border btn-lg rounded fs ${
          activeButton === "priceSort" ? "btn-primary text-white" : ""
        }`}
        onClick={() => {
          dispatch(setSortBy("price_lowest"));
          dispatch(toggleSortOrder());
          dispatch(setActiveButton("priceSort"));
        }}
      >
        {isAscending ? "Check highest price" : "Check Lowest price"}
      </button>

      {/* Distance Dropdown */}
      <div
        className="dropdown-container"
        onBlur={() => dispatch(setActiveDropdown(null))}
      >
        <button
          className={`custom-btn p-3 btn border btn-lg fs ${
            activeButton === "Distance" ? "btn-primary text-white" : ""
          }`}
          onClick={() => {
            dispatch(setActiveDropdown("Distance"));
            dispatch(setActiveButton("Distance"));
          }}
        >
          See Distance
        </button>

        {activeDropdown === "Distance" && (
          <div
            className="position-absolute mt-2 bg-white border rounded"
            style={{
              zIndex: 1050,
              cursor: "pointer",
              width: "270px",
              height: "370px",
              overflow: "auto",
            }}
          >
            <div className="fw-bold p-2 ms-1 mt-3">Airports</div>
            <div
              className="fw-medium p-2 text-start ps-4"
              style={{ fontSize: "15px" }}
            >
              Heathrow Airport
            </div>
            <div
              className="fw-medium p-2 text-start ps-4"
              style={{ fontSize: "15px" }}
            >
              Gatwick Airport
            </div>
            <div className="fw-bold p-2 ms-1">Transportation</div>
            <div
              className="fw-medium p-2 text-start ps-4"
              style={{ fontSize: "15px" }}
            >
              Paddington Railway Station
            </div>
            <div
              className="fw-medium p-2 text-start ps-4"
              style={{ fontSize: "15px" }}
            >
              Victoria Railway Station
            </div>
            <div className="fw-bold p-2 ms-1">Top landmarks</div>
            <div
              className="fw-medium p-2 text-start ps-4"
              style={{ fontSize: "15px" }}
            >
              Victoria London
            </div>
            <div
              className="fw-medium p-2 text-start ps-4"
              style={{ fontSize: "15px" }}
            >
              Bayswater
            </div>
            <div
              className="fw-medium p-2 text-start ps-4"
              style={{ fontSize: "15px" }}
            >
              Covent Garden
            </div>
          </div>
        )}
      </div>

      <button
        className={`custom-btn p-3 btn border btn-lg rounded fs ${
          activeButton === "nearest" ? "btn-primary text-white" : ""
        }`}
        onClick={() => dispatch(setActiveButton("nearest"))}
      >
        Nearest to
      </button>

      <button
        className={`custom-btn p-3 btn border btn-lg rounded fs ${
          activeButton === "bestReviewed" ? "btn-primary text-white" : ""
        }`}
        onClick={() => {
          dispatch(setActiveButton("bestReviewed"));
          dispatch(setSelectedRating("Rating"));
          dispatch(toggleRatingorder());
        }}
      >
        {isAscendingRating
          ? " Check Highest Reviewed"
          : " Check Lowest Reviewed"}
      </button>
    </div>
  );
};

export default SortingButtons;
