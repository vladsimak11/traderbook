// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import crypto from 'crypto';

// // Налаштування базового URL для axios
// axios.defaults.baseURL = 'https://api.gateio.ws/api/v4';

// // Функція для генерації підпису
// const generateSignature = (apiSecret, method, url, queryString, payload) => {
//   const hmac = crypto.createHmac('sha512', apiSecret);
//   const signString = `${method}\n${url}\n${queryString}\n${payload}`;
//   return hmac.update(signString).digest('hex');
// };

// // Ваші API ключі
// const API_KEY = 'process.env.API_KEY';
// const API_SECRET = 'process.env.API_SECRET';

// // Операція для отримання даних
// export const fetchExchange = createAsyncThunk(
//   'exchange/fetchExchange',
//   async (_, thunkAPI) => {
//     try {
//       const method = 'GET';
//       const url = '/margin/currency_pairs';
//       const queryString = ''; // Порожньо, оскільки запит без параметрів
//       const payload = ''; // Порожньо для GET запиту
//       const signature = generateSignature(API_SECRET, method, url, queryString, payload);

//       const response = await axios.get(url, {
//         headers: {
//           'KEY': API_KEY,
//           'SIGN': signature
//         }
//       });

//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );