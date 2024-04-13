import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://traderbook-back.onrender.com';

export const fetchCoins = createAsyncThunk(
  'coins/fetchCoins',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/data');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addCoin = createAsyncThunk(
  'coins/addCoin',
  async ({ name, quantity, commission, entry, sum }, thunkAPI) => {
    try {
      const response = await axios.post('/data', {
        name,
        quantity,
        commission,
        entry,
        sum,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteCoin = createAsyncThunk(
  'coins/deleteCoin',
  async (valueId, thunkAPI) => {
    try {
      const response = await axios.delete(`/data/${valueId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
