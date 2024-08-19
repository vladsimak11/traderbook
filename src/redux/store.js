import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import  { coinsReducer } from './coins/coinsSlice';
import { filterReducer } from './coins/filterSlice';
import { authReducer } from './auth/authSlice';
import { btcSpotReducer } from './btcSpot/btcSpotSlice';
// import { exchangeReducer } from './exchange/exchangeSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    coins: coinsReducer,
    filter: filterReducer,
    // exchange: exchangeReduc
    btcSpot: btcSpotReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

