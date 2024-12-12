import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWeather = createAsyncThunk(
  'weather/fetchCurrent',
  async (_, { rejectWithValue }) => {
    try {
      // Først hent brukerens posisjon
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
      
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=no`;
      console.log('Weather API URL:', url); // For debugging

      const response = await fetch(url);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Weather API Response:', errorData);
        throw new Error(errorData.message || 'Kunne ikke hente værdata');
      }

      const data = await response.json();
      console.log('Weather API Response:', data); // For debugging
      
      return {
        temp: Math.round(data.main.temp),
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        city: data.name
      };
    } catch (error) {
      console.error('Weather API Error:', error);
      if (error.name === 'GeolocationPositionError') {
        return rejectWithValue('Kunne ikke hente lokasjon. Vennligst gi tilgang til posisjon.');
      }
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Kunne ikke hente værdata';
      });
  }
});

export default weatherSlice.reducer; 