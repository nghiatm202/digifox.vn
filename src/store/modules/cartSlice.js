const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    courses: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const item = state.courses.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.courses.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      state.courses = state.courses.filter(item => item.id !== action.payload);
    },

    increaseCount: (state, action) => {
      state.courses = state.courses.map(item => {
        if (item.id === action.payload.id) {
          item.quantity++;
        }
        return item;
      });
    },

    decreaseCount: (state, action) => {
      state.courses = state.courses.map(item => {
        if (item.id === action.payload.id && item.quantity > 1) {
          item.quantity--;
        }
        return item;
      });
    },

    resetCart: state => {
      state.courses = [];
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addToCart, removeFromCart, resetCart, increaseCount, decreaseCount } = actions;
export default reducer;
