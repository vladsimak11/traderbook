// import axios from 'axios';

// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://api.gateio.ws/api/v4';

// export const fetchExchange = createAsyncThunk(
//   'exchange/fetchExchange',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/margin/currency_pairs');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );