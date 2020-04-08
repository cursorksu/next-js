import styled from 'styled-components';

export const List = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;
`;

export const PostBody = styled.p`
  white-space: pre-line;
  font-family: 'Raleway', sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
`;
