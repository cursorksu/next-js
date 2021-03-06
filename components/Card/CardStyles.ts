import styled, { keyframes } from 'styled-components';

const SlideBottom = keyframes`
  from {
     -webkit-transform: translateY(-200px);
            transform: translateY(-200px);
  }

  to {
      -webkit-transform: translateY(0);
            transform: translateY(0);
  }
`;

export const BtnWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translateY(-200px);
`;

export const Item = styled.div`
  flex-basis: 49%;
  width: 49%;
  margin-bottom: 20px;
  position: relative;
  box-sizing: border-box;
  max-height: 230px;

  &:hover ${BtnWrapper} {
    -webkit-animation: ${SlideBottom} 0.5s
      cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    animation: ${SlideBottom} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
      forwards;
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    bottom: 18px;
    left: 5px;
    width: 50%;
    height: 30px;
    z-index: 0;
    max-width: 300px;
    box-shadow: 0 20px 5px rgba(0, 0, 0, 0.3);
    transform: rotate(-3deg);
    box-sizing: border-box;
  }

  &:after {
    right: 5px;
    left: auto;
    transform: rotate(3deg);
  }

  @media (max-width: 768px) {
    flex-basis: 90vw;
    width: 90vw;
  }
`;

export const ItemWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: white;
  padding: 20px;
  box-shadow: 0 0 70px rgba(0, 0, 0, 0.1) inset;
  position: relative;
  z-index: 1;
  overflow: hidden;

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Raleway', sans-serif;
    white-space: pre-line;
  }
`;

export const Title = styled.h2`
  font-family: 'Comfortaa', sans-serif;
  text-align: center;
  line-height: 1.2;
  color: #f3969a;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 10px;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;

  a {
    color: #f3969a;
    text-decoration: none;

    &:hover {
      text-decoration: none;
      cursor: pointer;
      color: #fa6464;
    }
  }

  &:before {
    content: '';
    width: 100%;
    position: absolute;
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(243, 150, 154, 1) 49%,
      rgba(255, 255, 255, 0) 100%
    );
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`;

export const PostWrapper = styled.div`
  width: 100%;
  & ${Item} {
    flex-basis: 100%;
    width: 100%;
    max-height: initial;
  }
`;
