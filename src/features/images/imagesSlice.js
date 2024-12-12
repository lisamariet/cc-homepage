import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRandomImage = createAsyncThunk(
  'images/fetchRandom',
  async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=nature,landscape&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
        }
      }
    );
    const data = await response.json();
    return {
      url: data.urls.regular,
      alt: data.alt_description,
      photographer: data.user.name,
      photographerUrl: data.user.links.html
    };
  }
);

const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    currentImage: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomImage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomImage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentImage = action.payload;
        state.error = null;
      })
      .addCase(fetchRandomImage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default imagesSlice.reducer; 