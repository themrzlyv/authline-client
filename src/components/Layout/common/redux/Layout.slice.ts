import { createSlice } from '@reduxjs/toolkit';
import { iLayoutSliceState } from '../types';

const initialState: iLayoutSliceState = {
  menu: {
    isOpen: false,
  },
};

const layoutSlice = createSlice({
  name: 'Layout',
  initialState,
  reducers: {
    toggleMenuButton: (state) => {
      state.menu.isOpen = !state.menu.isOpen;
    },
  },
});

export const { toggleMenuButton,  } = layoutSlice.actions;

export default layoutSlice.reducer;
