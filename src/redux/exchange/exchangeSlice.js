// import { createSlice } from '@reduxjs/toolkit';

// import { fetchExchange } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const exchangeSlice = createSlice({
//   name: 'exchange',
//   initialState: {
//     exchangeCoins: [],
//     isLoading: false,
//     error: null,
//   },

//   extraReducers: builder => {
//     builder
//       .addCase(fetchExchange.pending, handlePending)
//       .addCase(fetchExchange.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.exchangeCoins = action.payload;
//       })
//       .addCase(fetchExchange.rejected, handleRejected)
//   },
// });

// export const exchangeReducer = exchangeSlice.reducer;
