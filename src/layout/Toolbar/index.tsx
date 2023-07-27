import React from 'react';

import { Container } from './styles';

interface TitlePageProps {
  description: string;
}

const TitlePage: React.FC<TitlePageProps> = ({ description }) => {
  return (
    <Container>
      <h1>{description}</h1>
    </Container>
  );
};

export default TitlePage;
