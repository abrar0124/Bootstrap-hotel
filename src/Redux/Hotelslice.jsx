import { createSlice } from "@reduxjs/toolkit";
import ProductsData from "../components/ProductsData";

const initialState = {
  products: ProductsData,
  searchQuery: "",
  selectedStars: [],
  selectedPrice: null,
  selectedDate: null,
  sortBy: null,
  isAscending: true,
  selectedProduct: null,
  selectedCountry: null,
  minprice: null,
  maxprice: null,
  activeButton: "ourTopPicks",
  activeDropdown: null,
  selectedRating: null,
  isAscendingRating: true,
};

const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    toggleStarFilter: (state, action) => {
      const star = action.payload;
      state.selectedStars.includes(star)
        ? (state.selectedStars = state.selectedStars.filter((s) => s !== star))
        : state.selectedStars.push(star);
    },
    clearstarfilter: (state) => {
      state.selectedStars = [];
    },
    setPriceFilter: (state, action) => {
      state.selectedPrice = action.payload;
    },
    setMinprice: (state, action) => {
      state.minprice = action.payload;
    },
    setMaxprice: (state, action) => {
      state.maxprice = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    toggleSortOrder: (state) => {
      state.isAscending = !state.isAscending;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    setActiveButton: (state, action) => {
      state.activeButton = action.payload;
    },
    setActiveDropdown: (state, action) => {
      state.activeDropdown =
        state.activeDropdown === action.payload ? null : action.payload;
    },
    setSelectedRating: (state, action) => {
      state.selectedRating = action.payload;
    },
    toggleRatingorder: (state) => {
      state.isAscendingRating = !state.isAscendingRating;
    },
  },
});

export const {
  setSearchQuery,
  toggleStarFilter,
  clearstarfilter,
  setPriceFilter,
  setMinprice,
  setMaxprice,
  setSelectedDate,
  setSortBy,
  toggleSortOrder,
  setSelectedProduct,
  setActiveButton,
  setActiveDropdown,
  setSelectedCountry,
  setSelectedRating,
  toggleRatingorder,
} = hotelSlice.actions;

export default hotelSlice.reducer;
