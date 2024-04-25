import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../../src/redux/productReducer";
import brandReducer from "../../src/redux/brandReducer";
import categoryReducer from "../redux/categoryReducer";
import unitReducer from "../redux/unitReducer";

export const store = configureStore({
  reducer: {
    productReducers: productSlice,
    brandReducer: brandReducer,
    categoryReducer: categoryReducer,
    unitReducer: unitReducer,
  },
});
