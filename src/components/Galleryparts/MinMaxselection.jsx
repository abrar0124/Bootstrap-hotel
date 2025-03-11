import { useDispatch, useSelector } from "react-redux";
import { setMaxprice, setMinprice } from "../../Redux/Hotelslice";

function MinMaxselection() {
  const { minprice, maxprice } = useSelector((state) => state.hotels);
  const dispatch = useDispatch();
  return (
    <>
      <div className="d-flex gap-3" style={{ marginLeft: "20%" }}>
        <div>
          <label className="fw-medium" style={{ fontSize: "14px" }}>
            Min
          </label>
          <input
            className="form-control border-dark"
            value={minprice || ""}
            type="number"
            placeholder="Min price"
            onChange={(e) => {
              dispatch(setMinprice(Number(e.target.value)) || null);
            }}
            onWheel={(e) => e.target.blur()}
          />
        </div>
        <div>
          <label className="fw-medium" style={{ fontSize: "14px" }}>
            Max
          </label>
          <input
            className="form-control border-dark"
            value={maxprice || ""}
            type="number"
            placeholder="Max price "
            onChange={(e) => {
              dispatch(setMaxprice(Number(e.target.value)) || null);
            }}
            onWheel={(e) => e.target.blur()}
          />
        </div>
      </div>
    </>
  );
}
export default MinMaxselection;
