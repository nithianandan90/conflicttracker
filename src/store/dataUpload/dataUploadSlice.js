import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uploadData: [],
};

export const dataUploadSlice = createSlice({
  name: 'dataUpload',
  initialState,
  reducers: {
    updateCountryData: (state, action) => {
      state.countryData = action.payload;
    },
  },
});

export const { uploadCountryData } = dataUploadSlice.actions;

export default dataUploadSlice.reducer;
