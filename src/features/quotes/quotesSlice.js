import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRandomQuote = createAsyncThunk(
  'quotes/fetchRandom',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
        headers: {
          'X-Api-Key': process.env.REACT_APP_NINJA_API_KEY
        }
      });
      
      if (!response.ok) {
        throw new Error('Kunne ikke hente sitat');
      }
      
      const data = await response.json();
      //console.log('Quote API response:', data);
      const quote = data[0];
      
      return {
        content: quote.quote,
        author: quote.author,
        category: quote.category
      };
    } catch (error) {
      console.error('Error fetching quote:', error);
      return rejectWithValue(error.message);
    }
  }
);

const quotesSlice = createSlice({
  name: 'quotes',
  initialState: {
    currentQuote: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentQuote = action.payload;
        state.error = null;
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Kunne ikke hente sitat';
      });
  }
});

export default quotesSlice.reducer; 