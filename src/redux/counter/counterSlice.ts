import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NameState {
  name: string;
}

const initialState: NameState = {
  name: '',
};

export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    namePassed: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { namePassed } = nameSlice.actions;

export default nameSlice.reducer;
