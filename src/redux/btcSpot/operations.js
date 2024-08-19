import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:3003/api/btc';

export const fetchBtcSpotData = createAsyncThunk(
    'btcSpot/fetchData',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get(baseURL);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );