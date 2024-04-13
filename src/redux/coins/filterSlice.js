import { createSlice } from "@reduxjs/toolkit"; 

const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    filterCoins(state, action) {
      state.filter = action.payload;
    }
  }
})

export const { filterCoins } =  filterSlice.actions;

export const filterReducer = filterSlice.reducer;