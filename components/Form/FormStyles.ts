import styled from 'styled-components';
import { Title } from '../Card/CardStyles';

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  display: block;
  line-height: 40px;
  border: none;
  background: transparent;
  font-size: 14px;
  padding: 0 12px;
  font-family: 'Raleway', sans-serif;
  color: rgba (0, 0, 0, 0.4);
  border-bottom: 2px solid #ddd;

  &:placeholder-shown {
    font-family: 'Raleway', sans-serif;
    color: rgba (0, 0, 0, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #f3969a;
  }
`;

export const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 150px;
  display: block;
  line-height: 1.2;
  background: transparent;
  font-size: 14px;
  padding: 12px;
  font-family: 'Raleway', sans-serif;
  color: rgba (0, 0, 0, 0.4);
  border: 2px solid #ccc;

  &:placeholder-shown {
    font-family: 'Raleway', sans-serif;
    color: rgba (0, 0, 0, 0.4);
  }

  &:focus {
    outline: none;
    border: 2px solid #f3969a;
  }
`;

export const Label = styled.label`
  font-family: 'Comfortaa', sans-serif;
  display: block;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  border: 2px solid #f3969a;
  box-sizing: border-box;
  width: 100%;
  display: block;
  line-height: 40px;
  background: #f3969a;
  color: #fff;
  font-family: 'Comfortaa', sans-serif;
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background: rgba(243, 150, 154, 0.8);
  }
`;

export const ErrorMess = styled(Title)`
  font-size: 14px;
`;
