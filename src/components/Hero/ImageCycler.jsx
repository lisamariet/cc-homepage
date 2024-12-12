import React from 'react';
import styled from 'styled-components';

const ImageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.imageUrl});
  transition: opacity 0.5s ease-in-out;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const NextButton = styled.button`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  z-index: 3;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid white;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const ImageCycler = () => {
  // Placeholder bilde inntil vi implementerer Unsplash API
  const defaultImage = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05';
  
  return (
    <>
      <ImageBackground imageUrl={defaultImage} />
      <NextButton>Neste bilde</NextButton>
    </>
  );
};

export default ImageCycler; 