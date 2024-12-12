import React from 'react';
import styled from 'styled-components';

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

const Quote = () => {
  // Placeholder sitat inntil vi implementerer Quotable API
  const defaultQuote = {
    content: "Livet er det som skjer mens du er opptatt med å legge andre planer.",
    author: "John Lennon"
  };

  return (
    <QuoteContainer>
      <QuoteText>"{defaultQuote.content}"</QuoteText>
      <QuoteAuthor>- {defaultQuote.author}</QuoteAuthor>
    </QuoteContainer>
  );
};

export default Quote; 