import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { quotesListReducers } from './reducers/wines_list';

export const store = configureStore({
  reducer: {quotesListReducers},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = any> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>