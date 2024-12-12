import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchRandomQuote } from '../../features/quotes/quotesSlice';

const QuoteContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 8px;
`;

const QuoteText = styled.blockquote`
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  font-style: italic;
`;

const QuoteAuthor = styled.cite`
  font-size: 1rem;
  font-style: normal;
`;

const LoadingText = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
`;

const Quote = () => {
  const dispatch = useDispatch();
  const { currentQuote, status } = useSelector(state => state.quotes);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRandomQuote());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return (
      <QuoteContainer>
        <LoadingText>Henter nytt sitat...</LoadingText>
      </QuoteContainer>
    );
  }

  if (status === 'failed') {
    return (
      <QuoteContainer>
        <LoadingText>Kunne ikke hente sitat. Prøv igjen senere.</LoadingText>
      </QuoteContainer>
    );
  }

  if (!currentQuote) {
    return null;
  }

  return (
    <QuoteContainer>
      <QuoteText>"{currentQuote.content}"</QuoteText>
      <QuoteAuthor>- {currentQuote.author}</QuoteAuthor>
    </QuoteContainer>
  );
};

export default Quote; 