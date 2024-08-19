import { createSlice } from '@reduxjs/toolkit';

import { fetchBtcSpotData } from './operations';

const btcSpotSlice = createSlice({
    name: 'btcSpot',
    initialState: {
      data: null,
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchBtcSpotData.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchBtcSpotData.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
        })
        .addCase(fetchBtcSpotData.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        });
    },
  });

  export const btcSpotReducer = btcSpotSlice.reducer;