import { createSlice } from "@reduxjs/toolkit";
import UpdateBrand from "../Ccomponents/Pages/Update modal Page/UpdateBrand";

const initialStateBrand = {
  brands: [
    {
      id: 1,
      brand: "shamiul",
      details: "dadfasdfn sdahfu asodhf hdfu huasdfh ahdfu fuuhasf hdffouo ",
    },
    {
      id: 2,
      brand: "shamiul",
      details: "thlls?",
    },
  ],
};

const brandSlice = createSlice({
  name: "brands",
  initialState: initialStateBrand,
  showBrand:(state)=>state,
  reducers: {
    addBrand: (state, action) => {
      state.brands.push(action.payload);
    },
    updateBrand: (state, action) => {
      const findInd = state.brands.findIndex(
        (item) => item.id === action.payload.id
      );
      state.brands[findInd] = action.payload;
    },
    deleteBrand: (state, action) => {
      const id = action.payload;
      state.brands = state.brands.filter((brand) => brand.id !== id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBrand, updateBrand, deleteBrand } = brandSlice.actions;

export default brandSlice.reducer;
