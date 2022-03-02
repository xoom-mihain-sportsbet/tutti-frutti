import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { favoritesListReducers } from './reducers/favorites_list';
import { quotesListReducers } from './reducers/quotes_list';

export const store = configureStore({
  reducer: {quotesListReducers, favoritesListReducers},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = any> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>