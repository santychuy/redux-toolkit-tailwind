import { configureStore } from '@reduxjs/toolkit';

import nameReducer from './counter/counterSlice';

export default configureStore({
  reducer: {
    name: nameReducer,
  },
});
