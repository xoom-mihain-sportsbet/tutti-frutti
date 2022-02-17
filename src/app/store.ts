import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { fruitsListReducers } from './reducers/fruits_list';

export const store = configureStore({
  reducer: {fruitsListReducers},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = any> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>