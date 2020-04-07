import React, { FC } from 'react';
import { Header } from '../Header';
import { Wrapper } from './LayoutStyles';

interface Props {
    children?: any;
}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            { children }
        </Wrapper>
    );
}