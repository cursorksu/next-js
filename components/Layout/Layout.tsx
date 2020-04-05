import React, { FC } from 'react';
import { Header } from '../Header';
import { s } from './LayoutStyles';

interface Props {
    children?: any;
}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <s.Wrapper>
            <Header />
            { children }
        </s.Wrapper>
    );
}