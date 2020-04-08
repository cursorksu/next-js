import React, { FC } from 'react';
import { Header } from '../Header';
import { Wrapper } from './LayoutStyles';

export const Layout: FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};
