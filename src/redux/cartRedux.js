import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
      console.log(action.payload);
      state.products.splice(action.payload.index, 1);
      state.total -=
        action.payload.product.price * action.payload.product.quantity;
    },
    removeCart: (state, action) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
});
export const { addProduct, removeProduct, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
