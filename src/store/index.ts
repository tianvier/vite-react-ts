import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
