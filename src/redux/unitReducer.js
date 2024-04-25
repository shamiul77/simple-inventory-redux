import { createSlice } from "@reduxjs/toolkit";
import UpdateUnit from "../Ccomponents/Pages/Update modal Page/UpdateUnit";

const initialStateUnit = {
  units: [
    {
      id: 1,
      unit: "shamiul",
      details: "dadfasdfn sdahfu asodhf hdfu huasdfh ahdfu fuuhasf hdffouo ",
    },
    {
      id: 2,
      unit: "shamiul",
      details: "thlls?",
    },
  ],
};

const unitSlice = createSlice({
  name: "unit",
  initialState: initialStateUnit,
  showUnit: (state) => state,
  reducers: {
    addUnit: (state, action) => {
      state.units.push(action.payload);
    },
    updateUnit: (state, action) => {
      console.log(action);
      const findInd = state.units.findIndex(
        (item) => item.id === action.payload.id
      );
      state.units[findInd] = action.payload;
    },
    deleteUnit: (state, action) => {
      const id = action.payload;
      state.units = state.units.filter((unit) => unit.id !== id);
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUnit, updateUnit, deleteUnit } = unitSlice.actions;

export default unitSlice.reducer;
