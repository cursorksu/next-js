
import styled, { keyframes }  from 'styled-components';
import { Title }  from '../../components/Card/CardStyles';

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
    TitleError: styled(Title) `
        font-size: 14px;
    `,
}
