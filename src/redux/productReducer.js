import { createSlice } from "@reduxjs/toolkit";
import UpdateModal from "../Ccomponents/Pages/UpdateModal";

const initialState = {
  products: [
    {
      id:1,
      name: "shamiul",
      category:"shamiul vai",
      unit:"shamiul",
      brand:"shamiul",
      details:"redux"
    },
    {
      id:2,
      name: "shamiul",
      category:"shamiul vai",
      unit:"shamiul",
      brand:"shamiul",
      details:"redux"
    }
  ],
};

 const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const findInd = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      state.products[findInd] = action.payload;
    },
    deleteProduct: (state, action) => {
      const id = action.payload
      state.products = state.products.filter((product)=> product.id !== id)
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct, updateProduct} =
  productSlice.actions;

export default productSlice.reducer;
