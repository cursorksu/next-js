import styled from 'styled-components';
import { ItemWrapper } from '../Card/CardStyles';

export const List = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;

  & ${ItemWrapper} > div {
    &:after {
      content: '';
      width: 100%;
      height: 60px;
      background: linear-gradient(
        to top,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.7) 50%,
        rgba(255, 255, 255, 0.1) 100%
      );
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
    }
  }
`;

export const PostBody = styled.p`
  white-space: pre-line;
  font-family: 'Raleway', sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
`;
