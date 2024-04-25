import { createSlice } from "@reduxjs/toolkit";
import UpdateCategory from "../Ccomponents/Pages/Update modal Page/UpdateCategory";

const initialStateCategory = {
  categorys: [
    {
      id: 1,
      category: "shamiul",
      details: "dadfasdfn sdahfu asodhf hdfu huasdfh ahdfu fuuhasf hdffouo",
    },
    {
      id: 2,
      category: "shamiul",
      details: "thlls",
    },
  ],
};

const categorySlice = createSlice({
  name: "category",
  initialState: initialStateCategory,
  showCategory:(state)=> state,
  reducers: {
    addCategory: (state, action) => {
      state.categorys.push(action.payload);
    },
    updateCategory: (state, action) => {
      const findInd = state.categorys.findIndex(
        (item) => item.id === action.payload.id
      );
      state.categorys[findInd] = action.payload;
    },
    deleteCategory: (state, action) => {
      const id = action.payload;
      state.categorys = state.categorys.filter((category) => category.id !== id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCategory, updateCategory, deleteCategory } =
  categorySlice.actions;

export default categorySlice.reducer;
