import styled, { keyframes } from 'styled-components';

const Shake = keyframes`
   10%, 90% {
     transform: translate3d(-1px, 0, 0);
  }

   20%, 80% {
     transform: translate3d(2px, 0, 0);
  }

   30%, 50%, 70% {
     transform: translate3d(-4px, 0, 0);
  }

   40%, 60% {
     transform: translate3d(4px, 0, 0);
  }
`;

export const Button = styled.button`
  border-radius: 50%;
  border: none;
  background: #f3969a;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  & svg {
    fill: #fff;
    width: 22px;
    height: 22px;
  }

  &:hover {
    animation: ${Shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
  }
`;
