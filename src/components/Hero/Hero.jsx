import React from 'react';
import styled from 'styled-components';
import ImageCycler from './ImageCycler';
import Quote from './Quote';

const HeroContainer = styled.section`
  position: relative;
  height: 40vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 2rem;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <ImageCycler />
      <HeroContent>
        <Quote />
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 