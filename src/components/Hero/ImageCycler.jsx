import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchRandomImage } from '../../features/images/imagesSlice';
import { fetchRandomQuote } from '../../features/quotes/quotesSlice';

const ImageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-image: url(${({ $imageUrl }) => $imageUrl});
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

const PhotoCredit = styled.div`
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  z-index: 3;
  color: white;
  font-size: 0.8rem;
  opacity: 0.8;
  
  a {
    color: white;
    text-decoration: underline;
    
    &:hover {
      opacity: 0.9;
    }
  }
`;

const ImageCycler = () => {
  const dispatch = useDispatch();
  const { currentImage, status: imageStatus } = useSelector(state => state.images);
  const { status: quoteStatus } = useSelector(state => state.quotes);
  
  useEffect(() => {
    if (imageStatus === 'idle') {
      dispatch(fetchRandomImage());
    }
  }, [dispatch, imageStatus]);

  const handleNext = () => {
    dispatch(fetchRandomImage());
    dispatch(fetchRandomQuote());
  };

  const defaultImage = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05';
  const imageUrl = currentImage?.url || defaultImage;
  const isLoading = imageStatus === 'loading' || quoteStatus === 'loading';

  return (
    <>
      <ImageBackground $imageUrl={imageUrl} />
      {currentImage && (
        <PhotoCredit>
          Foto av{' '}
          <a 
            href={currentImage.photographerUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {currentImage.photographer}
          </a>
        </PhotoCredit>
      )}
      <NextButton onClick={handleNext} disabled={isLoading}>
        {isLoading ? 'Henter...' : 'Neste'}
      </NextButton>
    </>
  );
};

export default ImageCycler; 