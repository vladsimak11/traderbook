import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { logOut } from '../../redux/auth/operations';
import { fetchCoins, addCoin, deleteCoin } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const coinsSlice = createSlice({
  name: 'coins',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCoins.pending, handlePending)
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCoins.rejected, handleRejected)
      .addCase(addCoin.pending, handlePending)
      .addCase(addCoin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.unshift(action.payload);

        toast.success(`Coin added!`, {
          position: 'top-center',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      })
      .addCase(addCoin.rejected, handleRejected)
      .addCase(deleteCoin.pending, handlePending)
      .addCase(deleteCoin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          item => item._id === action.payload.id
        );

        state.items.splice(index, 1);

        toast.error(`Coin deleted!`, {
          position: 'top-center',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      })
      .addCase(deleteCoin.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const coinsReducer = coinsSlice.reducer;
