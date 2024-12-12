import React from 'react';
import WeatherWidget from './WeatherWidget';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: var(--background);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Logo = styled.h1`
  color: var(--primary);
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Inspirerende tanker</Logo>
      <WeatherWidget />
    </HeaderContainer>
  );
};

export default Header; 