
import styled, { keyframes }  from 'styled-components';
import { card }  from '../../components/Card/CardStyles';

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

export const list = {
    BtnWrapper: styled.div `
        position: absolute;
        top: 20px;
        right: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transform: translateY(-200px);
    `,

    Button: styled.div `
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
    `,

    List: styled.div `
        display: grid;
        grid-template-columns: repeat(2, 500px);
        grid-gap: 20px;
    `,

    PostBody: styled.p `
        white-space: pre-line;
        font-family: 'Raleway', sans-serif;
        overflow: hidden;
        text-overflow: ellipsis;
    `,
};

export const errorMess = {
    TitleError: styled(card.Title) `
        font-size: 14px;
    `,
}

export const newPost = {
    Input: styled.input `
        box-sizing: border-box;
        width: 100%;
        display: block;
        line-height: 40px;
        border: none;
        background: transparent;
        font-size: 14px;
        padding: 0 12px;
        font-family: "Raleway", sans-serif;
        color: rgba (0, 0, 0, 0.4);
        border-bottom: 2px solid #f3969a;
        
        &:placeholder-shown {
            font-family: "Raleway", sans-serif;
            color: rgba (0, 0, 0, 0.4);
        }
        
         &:focus {
            outline: none;
        }
    `,

    Textarea: styled.textarea `
        box-sizing: border-box;
        width: 100%;
        height: 150px;
        display: block;
        line-height: 1.2;
        background: transparent;
        font-size: 14px;
        padding: 12px;
        font-family: "Raleway", sans-serif;
        color: rgba (0, 0, 0, 0.4);
        border: 2px solid #f3969a;
        
        &:placeholder-shown {
            font-family: "Raleway", sans-serif;
            color: rgba (0, 0, 0, 0.4);
        }
        
         &:focus {
            outline: none;
        }
    `,

    Label: styled.label`
        font-family: "Comfortaa", sans-serif;
        display: block;
        box-sizing: border-box;
        margin-bottom: 20px;
    `,

    Button: styled.button `
       border: 2px solid #f3969a;
        box-sizing: border-box;
        width: 100%;
        display: block;
        line-height: 40px;
        background: #f3969a;
        color: #fff;
        font-family: "Comfortaa", sans-serif;
        text-transform: uppercase;
        transition: background-color 0.3s ease-in-out;
        
        &:hover {
            background: rgba(243, 150, 154, 0.8) ;
        }
    `,
}