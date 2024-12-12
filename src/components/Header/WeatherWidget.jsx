import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchWeather } from '../../features/weather/weatherSlice';

const WeatherContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

const WeatherIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Temperature = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text);
`;

const Location = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const ErrorText = styled.span`
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
`;

const WeatherWidget = () => {
  const dispatch = useDispatch();
  const { data: weather, status, error } = useSelector(state => state.weather);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchWeather());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return (
      <WeatherContainer>
        <ErrorText>Henter vær...</ErrorText>
      </WeatherContainer>
    );
  }

  if (status === 'failed') {
    return (
      <WeatherContainer>
        <ErrorText>{error}</ErrorText>
      </WeatherContainer>
    );
  }

  if (!weather) {
    return null;
  }

  return (
    <WeatherContainer>
      <WeatherIcon>
        <img 
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.description}
        />
      </WeatherIcon>
      <Temperature>{weather.temp}°C</Temperature>
      <Location>{weather.city}</Location>
    </WeatherContainer>
  );
};

export default WeatherWidget; 