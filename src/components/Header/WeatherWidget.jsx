import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

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

const WeatherWidget = () => {
  const weather = useSelector(state => state.weather.data);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // Her kan vi senere legge til logikk for å hente vær-data
  }, [dispatch]);

  return (
    <WeatherContainer>
      <WeatherIcon>
        {weather?.icon && (
          <img 
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt="Værikon"
          />
        )}
      </WeatherIcon>
      <Temperature>{weather?.temp ? `${Math.round(weather.temp)}°C` : '--°C'}</Temperature>
      <Location>{weather?.city || 'Laster...'}</Location>
    </WeatherContainer>
  );
};

export default WeatherWidget; 